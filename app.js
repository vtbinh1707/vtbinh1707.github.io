/**
 * ADVANCED INFOGRAPHIC INTERACTIVE ENGINE & VISUAL EFFECTS SUITE
 * Vo Thanh Binh (Drake) — Lead Software Architect
 * High-performance 60-120fps reactive animations, 3D tilt, telemetry & SVG topology
 */

(function () {
    'use strict';

    // ==========================================
    // 1. NEURAL QUANTUM ARCHITECTURAL CANVAS
    // ==========================================
    const canvas = document.getElementById('neuralCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: null, y: null, maxDist: 140 };
        let animationFrameId;
        let isTabActive = true;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            // Responsive particle count to ensure high performance
            const count = Math.min(Math.floor((width * height) / 16000), 75);
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.65,
                    vy: (Math.random() - 0.5) * 0.65,
                    radius: Math.random() * 1.8 + 0.8,
                    pulse: Math.random() * Math.PI,
                    color: Math.random() > 0.4 ? 'cyan' : 'emerald'
                });
            }
        };

        const draw = () => {
            if (!isTabActive) return;
            ctx.clearRect(0, 0, width, height);
            const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.pulse += 0.02;

                if (p.x < 0) p.x = width;
                else if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                else if (p.y > height) p.y = 0;

                const currentRadius = p.radius + Math.sin(p.pulse) * 0.5;

                ctx.beginPath();
                ctx.arc(p.x, p.y, Math.max(0.4, currentRadius), 0, Math.PI * 2);
                if (isDark) {
                    ctx.fillStyle = p.color === 'cyan' 
                        ? 'rgba(56, 189, 248, 0.75)' 
                        : 'rgba(16, 185, 129, 0.75)';
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = p.color === 'cyan' ? '#0284c7' : '#10b981';
                } else {
                    ctx.fillStyle = 'rgba(2, 132, 199, 0.45)';
                    ctx.shadowBlur = 0;
                }
                ctx.fill();

                // Connect to mouse if nearby
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.maxDist) {
                        const alpha = (1 - dist / mouse.maxDist) * (isDark ? 0.45 : 0.25);
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = isDark ? `rgba(56, 189, 248, ${alpha})` : `rgba(2, 132, 199, ${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }

                // Connect to neighboring particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 115) {
                        const alpha = (1 - dist / 115) * (isDark ? 0.22 : 0.12);
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = isDark ? `rgba(148, 163, 184, ${alpha})` : `rgba(100, 116, 139, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        document.addEventListener('visibilitychange', () => {
            isTabActive = !document.hidden;
            if (isTabActive) {
                cancelAnimationFrame(animationFrameId);
                draw();
            }
        });

        resize();
        draw();
    }

    // ==========================================
    // 2. SCROLL PROGRESS BAR
    // ==========================================
    const progressBar = document.getElementById('scrollProgressBar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressBar.style.width = `${progress}%`;
        }, { passive: true });
    }

    // ==========================================
    // 3. LIVE TELEMETRY HUD TICKER
    // ==========================================
    const ticker = document.getElementById('telemetryTicker');
    if (ticker) {
        const messages = [
            'hud_t1',
            'hud_t2',
            'hud_t3',
            'hud_t4',
            'hud_t5',
            'hud_t6'
        ];
        let currentIndex = 0;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % messages.length;
            const key = messages[currentIndex];
            const currentLang = localStorage.getItem('drake_lang') || 'vi';
            const dict = (typeof translations !== 'undefined' && translations[currentLang]) ? translations[currentLang] : null;
            const text = dict && dict[key] ? dict[key] : 'PRODUCTION REALITY • ZERO DOWNTIME';

            ticker.style.opacity = '0';
            ticker.style.transform = 'translateY(6px)';

            setTimeout(() => {
                ticker.textContent = text;
                ticker.setAttribute('data-i18n', key);
                ticker.style.opacity = '1';
                ticker.style.transform = 'translateY(0)';
            }, 260);
        }, 3600);
    }

    // ==========================================
    // 4. ANIMATED COUNT-UP NUMBERS
    // ==========================================
    const counterElements = document.querySelectorAll('[data-counter]');
    if (counterElements.length > 0) {
        const runCounter = (el) => {
            const target = parseFloat(el.getAttribute('data-counter'));
            const suffix = el.getAttribute('data-suffix') || '';
            const prefix = el.getAttribute('data-prefix') || '';
            const isDecimal = target % 1 !== 0;
            const duration = 1800;
            const startTime = performance.now();

            const step = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out expo
                const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                const currentVal = target * ease;

                if (isDecimal) {
                    el.textContent = `${prefix}${currentVal.toFixed(2)}${suffix}`;
                } else if (target >= 1000) {
                    el.textContent = `${prefix}${Math.floor(currentVal).toLocaleString()}${suffix}`;
                } else {
                    el.textContent = `${prefix}${Math.floor(currentVal)}${suffix}`;
                }

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    el.textContent = `${prefix}${isDecimal ? target.toFixed(2) : target.toLocaleString()}${suffix}`;
                }
            };

            requestAnimationFrame(step);
        };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.35 });

        counterElements.forEach(el => counterObserver.observe(el));
    }

    // ==========================================
    // 5. ANIMATED SVG GAUGES & PROGRESS RINGS
    // ==========================================
    const gaugeElements = document.querySelectorAll('.svg-gauge-circle');
    if (gaugeElements.length > 0) {
        const gaugeObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const circle = entry.target;
                    const percent = parseFloat(circle.getAttribute('data-percent') || '0');
                    const radius = circle.r.baseVal.value;
                    const circumference = 2 * Math.PI * radius;
                    circle.style.strokeDasharray = `${circumference}`;
                    const offset = circumference - (percent / 100) * circumference;
                    circle.style.strokeDashoffset = `${offset}`;
                    observer.unobserve(circle);
                }
            });
        }, { threshold: 0.4 });

        gaugeElements.forEach(el => gaugeObserver.observe(el));
    }

    // ==========================================
    // 6. SCROLL REVEAL ANIMATIONS
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // ==========================================
    // 7. 3D CARD PERSPECTIVE TILT & SPOTLIGHT
    // ==========================================
    const tiltCards = document.querySelectorAll('.tilt-card, .system-card, .ai-card, .bento-stat');
    tiltCards.forEach(card => {
        let bounds;

        const updateTilt = (e) => {
            if (!bounds) bounds = card.getBoundingClientRect();
            const mouseX = e.clientX - bounds.left;
            const mouseY = e.clientY - bounds.top;

            // Set spotlight CSS variables
            card.style.setProperty('--mouse-x', `${mouseX}px`);
            card.style.setProperty('--mouse-y', `${mouseY}px`);

            // Compute tilt degrees (-8 to 8 deg)
            const centerX = bounds.width / 2;
            const centerY = bounds.height / 2;
            const deltaX = (mouseX - centerX) / centerX;
            const deltaY = (mouseY - centerY) / centerY;
            const rotateX = -deltaY * 5.5;
            const rotateY = deltaX * 5.5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        };

        const resetTilt = () => {
            bounds = null;
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        };

        card.addEventListener('mouseenter', () => { bounds = card.getBoundingClientRect(); });
        card.addEventListener('mousemove', updateTilt);
        card.addEventListener('mouseleave', resetTilt);
    });

    // ==========================================
    // 8. INTERACTIVE SYSTEM TOPOLOGY DIAGRAM
    // ==========================================
    const ecoNodes = document.querySelectorAll('.eco-node');
    const ecoDetailBox = document.getElementById('ecoDetailBox');
    const ecoDetailsTitle = document.getElementById('ecoDetailTitle');
    const ecoDetailsDesc = document.getElementById('ecoDetailDesc');
    const ecoDetailsStat = document.getElementById('ecoDetailStat');
    const ecoLines = document.querySelectorAll('.eco-line');

    const nodeData = {
        'erp': {
            title: 'FEA Enterprise ERP Core',
            desc: 'Hệ thống ERP điều hành chuỗi nhà máy quốc tế: Kho, Mua hàng, Kế hoạch, Sản xuất, Tài chính.',
            stat: '7,550+ Commits • Giảm 40% độ trễ báo cáo • Linked Server Multi-Plant',
            target: 'system-1'
        },
        'db': {
            title: 'Distributed Database Hub (10.17.215.22)',
            desc: 'Cơ sở dữ liệu trung tâm SQL Server liên kết các nhà máy (Linked Server), bọc ACID Locks nghiêm ngặt.',
            stat: '100% Data Integrity • Hàng triệu chứng từ/tháng • Zero Data Lock',
            target: 'system-1'
        },
        'agp': {
            title: 'AGP ClickOnce Smart Client',
            desc: 'Hệ thống Desktop triển khai trên hàng trăm máy trạm nhà xưởng (PDM, đóng gói, vải) với CI/CD tự động.',
            stat: '7,140+ Commits • 500+ Trạm nhà xưởng • Zero Downtime Release',
            target: 'system-2'
        },
        'pps': {
            title: 'PPS & AutoSewingPlan Algo Engine',
            desc: 'Thuật toán tối ưu hóa điều độ chuyền may theo thời gian thực, cân bằng đa biến số tiến độ nguyên phụ liệu.',
            stat: '1,580+ Commits • Rút ngắn từ 2 ngày -> 15 phút • Công suất 92%',
            target: 'system-3'
        },
        'mobile': {
            title: 'ITS.WebService & Mobile Industrial Suite',
            desc: 'Microservices & REST API phục vụ hàng nghìn máy quét cầm tay, kiểm tra chất lượng (QC) và điều hành xưởng.',
            stat: '2,790+ Commits • 500,000+ Lượt quét/ngày • Độ trễ < 80ms',
            target: 'system-4'
        },
        'rfid': {
            title: 'Industrial RFID IoT & Kho Vải Thông Minh',
            desc: 'Kiểm soát an toàn dò kim gãy (RFIDScanNeedle), định vị cuộn vải kho tự động và in tem mã vạch ZPL.',
            stat: '100% Triệt tiêu lỗi kim gãy • +70% Tốc độ kiểm kê • Zebra & Impinj',
            target: 'system-5'
        },
        'ai': {
            title: 'DrakeAgent & Phoenix Multi-Agent Hub',
            desc: 'Tác tử thông minh kết nối hạ tầng qua MCP Servers (GitLab, Jira, Mattermost, ADO.NET) tự động hóa SDLC.',
            stat: '10+ Custom Agents & Tools • -65% Thời gian review • 0 Xung đột release SQL',
            target: 'system-6'
        }
    };

    ecoNodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            const nodeId = node.getAttribute('data-node');
            const data = nodeData[nodeId];
            if (data && ecoDetailBox) {
                ecoNodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');

                if (ecoDetailsTitle) ecoDetailsTitle.textContent = data.title;
                if (ecoDetailsDesc) ecoDetailsDesc.textContent = data.desc;
                if (ecoDetailsStat) ecoDetailsStat.textContent = data.stat;

                // Highlight active connecting lines
                ecoLines.forEach(line => {
                    if (line.getAttribute('data-from') === nodeId || line.getAttribute('data-to') === nodeId) {
                        line.classList.add('line-highlight');
                    } else {
                        line.classList.remove('line-highlight');
                    }
                });
            }
        });

        node.addEventListener('click', () => {
            const nodeId = node.getAttribute('data-node');
            const data = nodeData[nodeId];
            if (data && data.target) {
                const targetCard = document.getElementById(data.target);
                if (targetCard) {
                    targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    targetCard.classList.add('highlight-pulse');
                    setTimeout(() => targetCard.classList.remove('highlight-pulse'), 1800);
                }
            }
        });
    });

    // ==========================================
    // 9. INTERACTIVE 4-STAGE AI SDLC PIPELINE
    // ==========================================
    const pipelineSteps = document.querySelectorAll('.pipeline-step');
    const pipelinePreviews = document.querySelectorAll('.pipeline-preview-panel');

    pipelineSteps.forEach(step => {
        step.addEventListener('click', () => {
            const stepNum = step.getAttribute('data-step');
            pipelineSteps.forEach(s => s.classList.remove('active'));
            step.classList.add('active');

            pipelinePreviews.forEach(panel => {
                if (panel.getAttribute('data-step') === stepNum) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });

    // ==========================================
    // 10. SYSTEM SHOWCASE FILTERING
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category') || '';
                if (filter === 'all' || category.includes(filter)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 30);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(12px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 240);
                }
            });
        });
    });

    // ==========================================
    // 11. THEME SWITCHER (DARK <-> LIGHT)
    // ==========================================
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const rootEl = document.documentElement;

    const applyTheme = (theme) => {
        rootEl.setAttribute('data-theme', theme);
        localStorage.setItem('drake_theme', theme);

        const iconEl = document.getElementById('themeIcon');
        if (iconEl) {
            if (theme === 'light') {
                // Moon icon for light mode
                iconEl.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
            } else {
                // Sun icon for dark mode
                iconEl.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
            }
        }
    };

    const savedTheme = localStorage.getItem('drake_theme') || 'dark';
    applyTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = rootEl.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }

})();
