/**
 * NEXT-GEN INTERACTIVE INFOGRAPHIC ENGINE & COMMAND CENTER SUITE
 * Vo Thanh Binh (Drake) — Lead Software Architect
 * Features: Neural Canvas, Live Topology Stress-Test Simulator, MCP Terminal Emulator,
 *           Dynamic SVG Radar Morphing, 52-Week Heatmap, WebAudio Synth & Ctrl+K Palette
 */

(function () {
    'use strict';

    // ==========================================
    // 0. SUBTLE WEB AUDIO SCI-FI TACTILE SYNTH
    // ==========================================
    let audioCtx = null;
    let sfxEnabled = false;

    const playTone = (freq = 680, duration = 0.035, type = 'sine') => {
        if (!sfxEnabled) return;
        try {
            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {}
    };

    const sfxBtn = document.getElementById('sfxToggleBtn');
    if (sfxBtn) {
        sfxBtn.addEventListener('click', () => {
            sfxEnabled = !sfxEnabled;
            sfxBtn.classList.toggle('active', sfxEnabled);
            if (sfxEnabled) playTone(880, 0.08, 'triangle');
        });
    }

    // ==========================================
    // 1. NEURAL QUANTUM ARCHITECTURAL CANVAS
    // ==========================================
    const canvas = document.getElementById('neuralCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: null, y: null, maxDist: 150 };
        let animationFrameId;
        let isTabActive = true;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const count = Math.min(Math.floor((width * height) / 17000), 75);
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.6,
                    vy: (Math.random() - 0.5) * 0.6,
                    radius: Math.random() * 1.8 + 0.8,
                    pulse: Math.random() * Math.PI,
                    color: Math.random() > 0.45 ? 'cyan' : 'emerald'
                });
            }
        };

        const draw = () => {
            if (!isTabActive) return;
            ctx.clearRect(0, 0, width, height);
            const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.pulse += 0.025;

                if (p.x < 0) p.x = width;
                else if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                else if (p.y > height) p.y = 0;

                const r = Math.max(0.5, p.radius + Math.sin(p.pulse) * 0.45);
                ctx.beginPath();
                ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? (p.color === 'cyan' ? 'rgba(56, 189, 248, 0.75)' : 'rgba(16, 185, 129, 0.75)')
                    : 'rgba(2, 132, 199, 0.42)';
                ctx.fill();

                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.maxDist) {
                        const alpha = (1 - dist / mouse.maxDist) * (isDark ? 0.48 : 0.25);
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = isDark ? `rgba(56, 189, 248, ${alpha})` : `rgba(2, 132, 199, ${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 115) {
                        const alpha = (1 - dist / 115) * (isDark ? 0.2 : 0.1);
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = isDark ? `rgba(148, 163, 184, ${alpha})` : `rgba(100, 116, 139, ${alpha})`;
                        ctx.lineWidth = 0.75;
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
        }, { passive: true });
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
    // 2. 52-WEEK PRODUCTION COMMIT HEATMAP
    // ==========================================
    const heatmapGrid = document.getElementById('commitHeatmapGrid');
    if (heatmapGrid) {
        const pattern = [
            3,4,2,4,4,3,4,2,3,4,4,4,3,2,4,3,4,4,2,4,
            4,3,4,4,3,4,2,4,4,3,4,4,4,3,4,2,4,4,3,4,
            2,4,4,3,4,4,4,3,2,4,3,4,4,4,3,4,4,4,3,4,
            4,4,3,4,2,4,4,4,3,4,4,3,4,4,4,3,4,4,4,4
        ];
        heatmapGrid.innerHTML = pattern.map(lvl => `<span class="heat-cell heat-l${lvl}"></span>`).join('');
    }

    // ==========================================
    // 3. SCROLL PROGRESS & ACTIVE DOCK HIGHLIGHT
    // ==========================================
    const progressBar = document.getElementById('scrollProgressBar');
    const dockLinks = document.querySelectorAll('.dock-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (progressBar) {
            progressBar.style.width = `${docHeight > 0 ? (scrollTop / docHeight) * 100 : 0}%`;
        }

        let currentSec = '';
        sections.forEach(sec => {
            if (scrollTop >= sec.offsetTop - 220) {
                currentSec = sec.getAttribute('id');
            }
        });
        dockLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSec}`);
        });
    }, { passive: true });

    // ==========================================
    // 4. LIVE TELEMETRY HUD TICKER
    // ==========================================
    const ticker = document.getElementById('telemetryTicker');
    if (ticker) {
        const messages = ['hud_t1', 'hud_t2', 'hud_t3', 'hud_t4', 'hud_t5', 'hud_t6'];
        let idx = 0;
        setInterval(() => {
            idx = (idx + 1) % messages.length;
            const key = messages[idx];
            const lang = localStorage.getItem('drake_lang') || 'vi';
            const dict = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : null;
            const text = dict && dict[key] ? dict[key] : 'FEA ERP • 99.99% UPTIME';

            ticker.style.opacity = '0';
            ticker.style.transform = 'translateY(5px)';
            setTimeout(() => {
                ticker.textContent = text;
                ticker.setAttribute('data-i18n', key);
                ticker.style.opacity = '1';
                ticker.style.transform = 'translateY(0)';
            }, 240);
        }, 3400);
    }

    // ==========================================
    // 5. ANIMATED COUNT-UP & SVG GAUGES
    // ==========================================
    const counterEls = document.querySelectorAll('[data-counter]');
    if (counterEls.length > 0) {
        const runCounter = (el) => {
            const target = parseFloat(el.getAttribute('data-counter'));
            const suffix = el.getAttribute('data-suffix') || '';
            const prefix = el.getAttribute('data-prefix') || '';
            const isDecimal = target % 1 !== 0;
            const duration = 1700;
            const start = performance.now();

            const step = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                const val = target * ease;
                if (isDecimal) el.textContent = `${prefix}${val.toFixed(2)}${suffix}`;
                else if (target >= 1000) el.textContent = `${prefix}${Math.floor(val).toLocaleString()}${suffix}`;
                else el.textContent = `${prefix}${Math.floor(val)}${suffix}`;

                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };

        const obs = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.35 });
        counterEls.forEach(el => obs.observe(el));
    }

    const gaugeEls = document.querySelectorAll('.svg-gauge-circle');
    if (gaugeEls.length > 0) {
        const gaugeObs = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const circle = entry.target;
                    const pct = parseFloat(circle.getAttribute('data-percent') || '0');
                    const r = circle.r.baseVal.value;
                    const c = 2 * Math.PI * r;
                    circle.style.strokeDasharray = `${c}`;
                    circle.style.strokeDashoffset = `${c - (pct / 100) * c}`;
                    observer.unobserve(circle);
                }
            });
        }, { threshold: 0.35 });
        gaugeEls.forEach(el => gaugeObs.observe(el));
    }

    // ==========================================
    // 6. SCROLL REVEAL & 3D CARD TILT
    // ==========================================
    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    if (revealEls.length > 0) {
        const revObs = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        revealEls.forEach(el => revObs.observe(el));
    }

    document.querySelectorAll('.tilt-card').forEach(card => {
        let bounds;
        card.addEventListener('mouseenter', () => {
            bounds = card.getBoundingClientRect();
            playTone(540, 0.02);
        });
        card.addEventListener('mousemove', (e) => {
            if (!bounds) bounds = card.getBoundingClientRect();
            const x = e.clientX - bounds.left;
            const y = e.clientY - bounds.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            const rx = -((y - bounds.height / 2) / (bounds.height / 2)) * 4.2;
            const ry = ((x - bounds.width / 2) / (bounds.width / 2)) * 4.2;
            card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
        });
        card.addEventListener('mouseleave', () => {
            bounds = null;
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });

    // ==========================================
    // 7. INTERACTIVE TOPOLOGY & LIVE FLOW SIMULATOR
    // ==========================================
    const ecoNodes = document.querySelectorAll('.eco-node');
    const ecoTitle = document.getElementById('ecoDetailTitle');
    const ecoDesc = document.getElementById('ecoDetailDesc');
    const ecoStat = document.getElementById('ecoDetailStat');
    const simRunBtn = document.getElementById('simRunBtn');

    const nodeData = {
        'rfid': {
            title: 'Industrial RFID IoT & Smart Fabric Warehouse',
            desc: 'Cổng quét UHF RFID Zebra & Impinj Speedway kiểm soát an toàn kim gãy và định vị cuộn vải thời gian thực.',
            stat: '0% Broken Needle Hazard • +70% Inventory Speed • ZPL Engine',
            target: 'system-5'
        },
        'mobile': {
            title: 'ITS.WebService & Mobile Industrial Suite',
            desc: 'Cụm API Gateway & Microservices phục vụ hàng nghìn thiết bị kiểm phẩm QC (ITS.Mobile.QC) và barcode xưởng.',
            stat: '2,790+ Commits • 500,000+ Scans/Day • Latency < 80ms',
            target: 'system-4'
        },
        'erp': {
            title: 'FEA Enterprise ERP Core Platform',
            desc: 'Trái tim điều hành chuỗi nhà máy quốc tế: Mua hàng, Kho, Tài chính, Kế hoạch, Sản xuất, Nhân sự.',
            stat: '7,550+ Commits • -40% Reporting Latency • ACID Compliant',
            target: 'system-1'
        },
        'db': {
            title: 'Distributed SQL Server Hub (10.17.215.22)',
            desc: 'Kiến trúc cơ sở dữ liệu phân tán kết nối đa nhà máy qua Linked Server, tối ưu hóa hàng nghìn Stored Procedures.',
            stat: 'Millions of Vouchers/Month • Zero Deadlocks • Live Schema',
            target: 'system-1'
        },
        'pps': {
            title: 'PPS & AutoSewingPlan Algorithm Engine',
            desc: 'Thuật toán tối ưu hóa điều độ chuyền may tự động, cân bằng đồng thời nguyên phụ liệu và năng lực chuyền.',
            stat: '1,580+ Commits • 2 Days -> 15 Mins • 92% Line Efficiency',
            target: 'system-3'
        },
        'agp': {
            title: 'Apparel Global Platform (AGP - ClickOnce)',
            desc: 'Hệ thống Smart Client Desktop triển khai trên hơn 500 máy trạm nhà xưởng với pipeline CI/CD tự động.',
            stat: '7,140+ Commits • 500+ Plant Terminals • Zero Downtime',
            target: 'system-2'
        },
        'ai': {
            title: 'DrakeAgent & Phoenix Multi-Agent MCP Hub',
            desc: 'Hệ sinh thái tác tử thông minh kết nối trực tiếp GitLab, Jira, Mattermost và DB thật qua Model Context Protocol.',
            stat: '10+ Custom MCP Tools • -65% Review Time • 100% Safe SQL Release',
            target: 'system-6'
        }
    };

    const activateNode = (nodeId) => {
        const data = nodeData[nodeId];
        if (!data) return;
        ecoNodes.forEach(n => n.classList.toggle('active', n.getAttribute('data-node') === nodeId));
        if (ecoTitle) ecoTitle.textContent = data.title;
        if (ecoDesc) ecoDesc.textContent = data.desc;
        if (ecoStat) ecoStat.textContent = data.stat;
    };

    ecoNodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            playTone(620, 0.03);
            activateNode(node.getAttribute('data-node'));
        });
        node.addEventListener('click', () => {
            const id = node.getAttribute('data-node');
            const data = nodeData[id];
            if (data && data.target) {
                const targetEl = document.getElementById(data.target);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    targetEl.classList.add('highlight-pulse');
                    setTimeout(() => targetEl.classList.remove('highlight-pulse'), 1800);
                }
            }
        });
    });

    if (simRunBtn) {
        simRunBtn.addEventListener('click', () => {
            if (simRunBtn.classList.contains('is-running')) return;
            simRunBtn.classList.add('is-running');
            const sequence = ['rfid', 'mobile', 'erp', 'db', 'pps', 'agp', 'ai'];
            let step = 0;

            const interval = setInterval(() => {
                if (step >= sequence.length) {
                    clearInterval(interval);
                    ecoNodes.forEach(n => n.classList.remove('sim-ping'));
                    simRunBtn.classList.remove('is-running');
                    activateNode('erp');
                    return;
                }
                const currentId = sequence[step];
                playTone(500 + step * 75, 0.05, 'triangle');
                ecoNodes.forEach(n => n.classList.toggle('sim-ping', n.getAttribute('data-node') === currentId));
                activateNode(currentId);
                step++;
            }, 520);
        });
    }

    // ==========================================
    // 8. LIVE MCP TERMINAL SIMULATOR & STEPPER
    // ==========================================
    const pipelineSteps = document.querySelectorAll('.pipeline-step');
    const pipelinePanels = document.querySelectorAll('.pipeline-preview-panel');
    const termBtns = document.querySelectorAll('.term-cmd-btn');
    const terminalBody = document.getElementById('mcpTerminalBody');

    const terminalScripts = {
        'analyze_task': [
            '<span class="t-prompt">drake@feavn-architect:~$</span> <span class="t-cmd">mcp run analyze_task --ticket="FEA-8942"</span>',
            '<span class="t-info">[MCP:OfficeParser] Extracting BA spec from FEA-8942_Spec_v2.xlsx...</span>',
            '<span class="t-info">[MCP:ADO.NET] Connecting to Production Replica 10.17.215.22...</span>',
            '<span class="t-ok">✔ Introspected 4 tables, 12 indexes & sp_GetSewingSchedule_v3</span>',
            '<span class="t-warn">⚠ Detected missing composite index on [OrderNo, PlantID]</span>',
            '<span class="t-ok">✔ Generated Root-Cause & Zero-Specialized-Case Blueprint in 4.2s!</span>'
        ],
        'check_code': [
            '<span class="t-prompt">drake@feavn-architect:~$</span> <span class="t-cmd">mcp run check_code_change --mr="1408"</span>',
            '<span class="t-info">[MCP:GitLab] Fetching diff for Merge Request !1408 (18 files)...</span>',
            '<span class="t-ok">✔ SQL Gate: Verified BEGIN TRAN / COMMIT & IF NOT EXISTS idempotency</span>',
            '<span class="t-ok">✔ Security UX: 0 raw technical exceptions leaked to Razor/DevExtreme UI</span>',
            '<span class="t-ok">✔ Encoding Gate: Enforced UTF-8 with BOM on 3 release scripts for IIS</span>',
            '<span class="t-ok">★ STATUS: PASSED QUALITY GATE — 0 CONFLICTS DETECTED</span>'
        ],
        'create_qa': [
            '<span class="t-prompt">drake@feavn-architect:~$</span> <span class="t-cmd">mcp run create_test_task --dispatch="mattermost"</span>',
            '<span class="t-info">[MCP:Jira] Creating QA Subtask FEA-8943 linked to parent FEA-8942...</span>',
            '<span class="t-ok">✔ Populated 14 Edge-Case Test Matrix scenarios & SQL Rollback script</span>',
            '<span class="t-info">[MCP:Mattermost] Dispatching direct notification to @qa-team-lead...</span>',
            '<span class="t-ok">✔ Task transitioned to [IN REVIEW] • QA Handover Complete!</span>'
        ],
        'sql_tune': [
            '<span class="t-prompt">drake@feavn-architect:~$</span> <span class="t-cmd">sql-tune --server="10.17.215.22" --linked-server</span>',
            '<span class="t-info">[SQL-Profiler] Analyzing cross-plant Linked Server execution plan...</span>',
            '<span class="t-warn">⚠ Remote Join scan cost: 78.4% -> Refactoring to OPENQUERY + Temp Table</span>',
            '<span class="t-ok">✔ Execution time reduced: 14,200ms ➔ 1,850ms (-86.9% Latency)</span>',
            '<span class="t-ok">✔ ACID lock contention: 0% • Production verified!</span>'
        ]
    };

    let termTimer = null;
    const runTerminalScript = (cmdKey) => {
        if (!terminalBody || !terminalScripts[cmdKey]) return;
        clearInterval(termTimer);
        terminalBody.innerHTML = '';
        const lines = terminalScripts[cmdKey];
        let i = 0;

        termTimer = setInterval(() => {
            if (i >= lines.length) {
                clearInterval(termTimer);
                return;
            }
            playTone(740, 0.02);
            const div = document.createElement('div');
            div.className = 't-line';
            div.innerHTML = lines[i];
            terminalBody.appendChild(div);
            terminalBody.scrollTop = terminalBody.scrollHeight;
            i++;
        }, 280);
    };

    termBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            termBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            runTerminalScript(btn.getAttribute('data-cmd'));
        });
    });

    pipelineSteps.forEach(step => {
        step.addEventListener('click', () => {
            const num = step.getAttribute('data-step');
            pipelineSteps.forEach(s => s.classList.toggle('active', s === step));
            pipelinePanels.forEach(p => p.classList.toggle('active', p.getAttribute('data-step') === num));
            const mapCmd = { '1': 'analyze_task', '2': 'sql_tune', '3': 'check_code', '4': 'create_qa' };
            if (mapCmd[num]) {
                termBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-cmd') === mapCmd[num]));
                runTerminalScript(mapCmd[num]);
            }
        });
    });

    // ==========================================
    // 9. INTERACTIVE SVG RADAR POLYGON MORPHING
    // ==========================================
    const radarPolygon = document.getElementById('skillRadarPolygon');
    const skillClusters = document.querySelectorAll('.skill-category');
    const radarShapes = [
        '150,24 260,86 256,214 150,274 44,214 40,86', // Balanced High Mastery
        '150,18 272,80 245,208 150,265 52,205 46,90', // Architecture Focus
        '150,28 268,82 268,220 150,278 48,210 44,88', // Backend & DB Focus
        '150,20 255,90 250,210 150,275 34,222 32,80'  // AI & IoT Focus
    ];

    skillClusters.forEach((cluster, idx) => {
        cluster.addEventListener('mouseenter', () => {
            if (radarPolygon && radarShapes[idx]) {
                radarPolygon.setAttribute('points', radarShapes[idx]);
            }
        });
        cluster.addEventListener('mouseleave', () => {
            if (radarPolygon) {
                radarPolygon.setAttribute('points', radarShapes[0]);
            }
        });
    });

    // ==========================================
    // 10. SYSTEM FILTERING & THEME SWITCHER
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            playTone(600, 0.03);
            filterBtns.forEach(b => b.classList.toggle('active', b === btn));
            const f = btn.getAttribute('data-filter');
            projectCards.forEach(card => {
                const cat = card.getAttribute('data-category') || '';
                const show = (f === 'all' || cat.includes(f));
                card.style.display = show ? 'flex' : 'none';
            });
        });
    });

    const themeBtn = document.getElementById('themeToggleBtn');
    const rootEl = document.documentElement;

    const applyTheme = (theme) => {
        rootEl.setAttribute('data-theme', theme);
        localStorage.setItem('drake_theme', theme);
        const iconEl = document.getElementById('themeIcon');
        if (iconEl) {
            iconEl.innerHTML = theme === 'light'
                ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'
                : '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
        }
    };

    applyTheme(localStorage.getItem('drake_theme') || 'dark');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const curr = rootEl.getAttribute('data-theme') || 'dark';
            applyTheme(curr === 'dark' ? 'light' : 'dark');
        });
    }

    // ==========================================
    // 11. COMMAND PALETTE MODAL (CTRL + K)
    // ==========================================
    const cmdModal = document.getElementById('cmdModalBackdrop');
    const cmdTrigger = document.getElementById('cmdPaletteBtn');
    const cmdClose = document.getElementById('cmdCloseBtn');

    const toggleCmdModal = (open) => {
        if (!cmdModal) return;
        cmdModal.classList.toggle('open', open);
    };

    if (cmdTrigger) cmdTrigger.addEventListener('click', () => toggleCmdModal(true));
    if (cmdClose) cmdClose.addEventListener('click', () => toggleCmdModal(false));
    if (cmdModal) {
        cmdModal.addEventListener('click', (e) => {
            if (e.target === cmdModal) toggleCmdModal(false);
        });
    }

    window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            toggleCmdModal(!cmdModal.classList.contains('open'));
        } else if (e.key === 'Escape' && cmdModal && cmdModal.classList.contains('open')) {
            toggleCmdModal(false);
        }
    });

    document.querySelectorAll('[data-cmd-action]').forEach(item => {
        item.addEventListener('click', () => {
            const act = item.getAttribute('data-cmd-action');
            toggleCmdModal(false);
            if (act === 'sim') {
                document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => simRunBtn?.click(), 500);
            } else if (act === 'theme') {
                themeBtn?.click();
            } else if (act === 'lang') {
                const curr = localStorage.getItem('drake_lang') || 'vi';
                if (typeof applyLanguage === 'function') applyLanguage(curr === 'vi' ? 'en' : 'vi');
            } else if (act === 'print') {
                window.print();
            } else if (act.startsWith('#')) {
                document.querySelector(act)?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

})();
