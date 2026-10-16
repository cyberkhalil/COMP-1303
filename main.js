/* ============================================================
 C O*MP 1303 — Shared JavaScript
 Cyber Khalil Academy | Mahmoud Khalil
 ============================================================ */

(function () {
    'use strict';

    /* ==========================================================
     *  1) FOOTER YEAR — يدعم كلا المعرّفين (#current-year، #year)
     *  ========================================================== */
    const yearEls = document.querySelectorAll('#current-year, #year');
    if (yearEls.length) {
        const year = new Date().getFullYear();
        yearEls.forEach(el => { el.textContent = year; });
    }

    /* ==========================================================
     *  2) QUICK-NAV — جمع الأقسام التي تشير إليها الروابط
     *  ========================================================== */
    const navLinks = document.querySelectorAll('.quick-nav a');
    if (!navLinks.length) return;

    const sections = [];
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        const target = document.querySelector(href);
        if (target) sections.push({ link, section: target, href });
    });

    if (!sections.length) return;

    /* ==========================================================
     *  3) أدوات مساعدة
     *  ========================================================== */

    /**
     * يعيد إحداثية المستند الفعلية لأعلى عنصر.
     * نستخدم getBoundingClientRect + scrollY بدلاً من offsetTop،
     * لأن offsetTop يُحسب نسبةً لأقرب عنصر أب موضّع (positioned
     * ancestor) — وهذا يُنتج قيَماً خاطئة عندما تكون الحاوية
     * main.lecture-container ذات position: relative.
     */
    function documentTop(el) {
        return el.getBoundingClientRect().top + window.scrollY;
    }

    /**
     * يحدد الرابط النشط الحالي بناءً على موقع القراءة.
     * خط المرجع ≈ 35% من ارتفاع النافذة من أعلى.
     */
    function currentSectionHref() {
        const scrollBottom = window.scrollY + window.innerHeight;
        const pageBottom   = document.documentElement.scrollHeight;

        // المستخدم وصل إلى نهاية الصفحة → فعّل آخر رابط
        if (scrollBottom >= pageBottom - 4) {
            return sections[sections.length - 1].href;
        }

        const refY = window.scrollY + window.innerHeight * 0.35;
        let href = sections[0].href;

        // القسم "الحالي" هو آخر قسم يقع عنوانه فوق خط المرجع
        for (let i = 0; i < sections.length; i++) {
            if (documentTop(sections[i].section) <= refY) {
                href = sections[i].href;
            } else {
                break; // الأقسام مرتّبة، فلا داعي لمتابعة المسح
            }
        }
        return href;
    }

    /**
     * تحديث الصنف .active — فقط عند تغيّر الرابط المختار.
     * يقلّل هذا عدد عمليات DOM في كل نبضة تمرير.
     */
    let activeHref = null;
    function setActive(href) {
        if (href === activeHref) return;
        activeHref = href;
        navLinks.forEach(link => {
            link.classList.toggle(
                'active',
                link.getAttribute('href') === href
            );
        });
    }

    /* ==========================================================
     *  4) معالج التمرير (rAF-throttled، passive)
     *  ========================================================== */
    let ticking = false;

    function onScroll() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
            setActive(currentSectionHref());
            ticking = false;
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // إعادة الفحص عند تغيّر الحجم — مُهدَّأ لتفادي الإفراط
    let resizeTimer = null;
    window.addEventListener('resize', () => {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(onScroll, 120);
    }, { passive: true });

    // الفحص الأولي بعد أن يستقر التخطيط (بعد تحميل الخطوط/الصور)
    window.requestAnimationFrame(onScroll);

    /* ==========================================================
     *  5) SMOOTH SCROLL — مع احترام prefers-reduced-motion
     *  ========================================================== */
    const prefersReduced =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const HEADER_OFFSET = 24;

    function scrollToElement(el) {
        const top = documentTop(el) - HEADER_OFFSET;

        if (prefersReduced) {
            // انتقال فوري لمن يفضّل تقليل الحركة
            window.scrollTo(0, top);
        } else {
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            scrollToElement(target);

            // تحديث شريط العنوان دون القفز مرة أخرى
            if (history.replaceState) {
                history.replaceState(null, '', href);
            }
        });
    });

    /* ==========================================================
     *  6) HASH مبدئي في الرابط — تصحيح الإزاحة تلقائياً
     *  ========================================================== */
    if (window.location.hash) {
        const initialTarget = document.querySelector(window.location.hash);
        if (initialTarget) {
            // نترك المتصفح يقوم بالقفز أولاً، ثم نضبط الإزاحة
            requestAnimationFrame(() => {
                scrollToElement(initialTarget);
            });
        }
    }

})();
