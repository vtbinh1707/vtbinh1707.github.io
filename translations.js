/**
 * BILINGUAL TRANSLATION DICTIONARY (VIETNAMESE & ENGLISH)
 * Vo Thanh Binh (Drake) — Lead Software Architect Portfolio
 * 100% Real-World Engineering Facts from Enterprise & AI Operations
 */

const translations = {
    vi: {
        // Navigation & Top Bar
        brand_name: "VÕ THANH BÌNH",
        brand_role: "LEAD ARCHITECT",
        btn_pdf: "In / Tải PDF (A4)",
        tagline: "Lead Software Architect • Enterprise ERP & AI Multi-Agent",
        role_title: "Lead Software Architect | Chief Solutions & AI Systems Engineer",
        header_bio: "Kiến trúc sư giải pháp phần mềm cấp cao với hơn 4 năm kinh nghiệm thiết kế, vận hành hệ thống ERP sản xuất may mặc quy mô lớn (FEAVN • Far Eastern Group) và nền tảng AI Multi-Agent. Vận hành với triết lý kiến trúc <em>\"Zero-Specialized-Case\"</em> — chuẩn hóa, ổn định bền bỉ và tối ưu hóa hiệu năng thực tế.",
        location: "Bình Dương / TP. HCM, Việt Nam",
        company: "Far Eastern Apparel Vietnam (FEAVN)",
        btn_github: "GitHub Profile",
        btn_contact: "Liên hệ Trực tiếp",
        status_available: "SẴN SÀNG TRIỂN KHAI • 4+ NĂM LEAD ARCHITECT",

        // Quick Navigation Pills
        nav_metrics: "Chỉ Số",
        nav_ecosystem: "Sơ Đồ Kiến Trúc",
        nav_sdlc: "AI Pipeline",
        nav_systems: "Hệ Thống",
        nav_skills: "Kỹ Năng",
        nav_experience: "Kinh Nghiệm",

        // Live Telemetry HUD
        hud_label: "GIÁM SÁT TRỰC TUYẾN:",
        hud_t1: "FEA ERP • MES • 99.99% UPTIME",
        hud_t2: "LIVE DB: 10.17.215.22 • LINKED SERVER HOẠT ĐỘNG",
        hud_t3: "AGP CLICKONCE • 500+ MÁY TRẠM • 0 DOWNTIME",
        hud_t4: "AI MULTI-AGENT HUB • MCP CHUẨN HÓA • FUNCTION CALLING",
        hud_t5: "RFID SCANNER ENGINE • ĐỘ TRỄ < 80ms",
        hud_t6: "KIẾN TRÚC: ZERO-SPECIALIZED-CASE",

        // Impact Stats Ribbon
        metrics_heading: "Chỉ Số Đột Phá & Dữ Liệu Vận Hành Thực Tế",
        metrics_sub: "Dữ liệu đo lường trực tiếp từ môi trường sản xuất công nghiệp quốc tế và hệ thống AI tự hành",
        stat_commits_num: "30,000+",
        stat_commits_label: "Enterprise Commits",
        stat_commits_desc: "Mã nguồn sản xuất thực chiến đã đóng góp",
        stat_commits_badge: "Thực chiến",

        stat_uptime_num: "99.99%",
        stat_uptime_label: "Uptime Toàn Nhà Máy",
        stat_uptime_desc: "Vận hành ổn định chuỗi nhà xưởng liên tục",
        stat_uptime_badge: "Zero Downtime",

        stat_ai_num: "10+",
        stat_ai_label: "AI Agents & Custom MCP",
        stat_ai_desc: "Tự động hóa hoàn toàn luồng bóc tách & QA",
        stat_ai_badge: "Autonomous",

        stat_scans_num: "500K+",
        stat_scans_label: "Lượt Quét / Ngày",
        stat_scans_desc: "Giao dịch RFID, Barcode & QC thời gian thực",
        stat_scans_badge: "<80ms Latency",

        stat_latency_num: "-40%",
        stat_latency_label: "Độ Trễ Truy Vấn DB",
        stat_latency_desc: "Tối ưu Stored Procedure & Linked Server",
        stat_latency_badge: "Tối ưu hóa",

        stat_efficiency_num: "92%",
        stat_efficiency_label: "Công Suất Chuyền May",
        stat_efficiency_desc: "Thuật toán PPS rút ngắn lập kế hoạch từ 2 ngày -> 15p",
        stat_efficiency_badge: "AutoSewingPlan",

        // Summary
        summary_heading: "Tuyên Ngôn Kiến Trúc & Tư Duy Kỹ Thuật",
        summary_text: "Tôi theo đuổi nguyên tắc kiến trúc <strong>\"Zero-Specialized-Case\"</strong>: nói không với các bản vá chắp vá tình thế, luôn hướng đến thiết kế tổng quát, module hóa tối đa và chuẩn hóa cấu trúc dữ liệu để hệ thống vận hành bền vững không phát sinh nợ kỹ thuật. Với hơn <strong>30,000+ lượt commit</strong> thực chiến trên các hệ thống sản xuất tại tập đoàn may mặc quốc tế, tôi khai phóng sức mạnh của <strong>AI Multi-Agent & giao thức MCP</strong> vào từng khâu kỹ thuật thực tế: từ bóc tách nghiệp vụ BA, kiểm duyệt an toàn release script SQL cho đến sinh kịch bản test tự động.",

        // Interactive Ecosystem Architecture Map
        eco_heading: "Sơ Đồ Hệ Sinh Thái Kiến Trúc Toàn Diện",
        eco_sub: "Mô hình mạng lưới liên kết giữa ERP Lõi, Cơ sở dữ liệu phân tán, Thiết bị IoT xưởng và AI Tác tử Hub",
        eco_node_erp: "FEA ERP CORE",
        eco_node_erp_sub: "C# .NET • SQL Tuning",
        eco_node_db: "LINKED SERVER DB",
        eco_node_db_sub: "10.17.215.22 • ACID Locks",
        eco_node_agp: "AGP CLICKONCE",
        eco_node_agp_sub: "500+ Workstations",
        eco_node_pps: "PPS ALGO ENGINE",
        eco_node_pps_sub: "AutoSewingPlan • 92% Line",
        eco_node_mobile: "ITS.MOBILE & QC",
        eco_node_mobile_sub: "Microservices • <80ms",
        eco_node_rfid: "RFID & KHO VẢI",
        eco_node_rfid_sub: "Zebra • Impinj Gateway",
        eco_node_ai: "DRAKE AGENT & MCP",
        eco_node_ai_sub: "AI Multi-Agent Hub",
        eco_hint: "✦ Bấm vào từng khối kiến trúc để soi chi tiết công nghệ & dữ liệu vận hành",

        // AI Multi-Agent SDLC Pipeline Infographic
        ai_pipeline_heading: "Quy Trình AI Tác Tử Tự Động Hóa Thực Chiến (SDLC Pipeline)",
        ai_pipeline_sub: "Các quy trình tác tử tự hành (Autonomous Multi-Agent) được vận hành hàng ngày qua giao thức Model Context Protocol (MCP), kết nối trực tiếp hạ tầng thực tế",
        step1_title: "1. Bóc Tách Nghiệp Vụ BA/SA",
        step1_desc: "AI tự động phân tích và trích xuất 100% sơ đồ nghiệp vụ từ file Excel, Word, PPTX của BA/SA",
        step2_title: "2. Soi DB Sâu (analyze_task)",
        step2_desc: "Đọc trực tiếp cấu trúc bảng, index & Stored Procedure trên DB thật 10.17.215.22 trước khi viết code",
        step3_title: "3. Chốt Chặn An Toàn Code (check_code_change)",
        step3_desc: "Bắt buộc bọc BEGIN TRAN/COMMIT, chặn Exception thô, kiểm tra idempotency và ép UTF-8 BOM",
        step4_title: "4. Tự Sinh QA Subtask (create_test_task)",
        step4_desc: "Tự sinh Jira Subtask với Test Matrix toàn diện, script test data, rollback an toàn và bắn ChatOps",

        ai_c1_title: "Hạ Tầng Tác Tử & Custom MCP Servers",
        ai_c1_badge: "Custom MCP",
        ai_c1_b1: "<strong>GitLab MCP:</strong> Phân tích commit diff, đọc mô tả MR & tải tài liệu đính kèm qua API",
        ai_c1_b2: "<strong>Jira & Mattermost MCP:</strong> Đọc requirement, đồng bộ tiến độ & bắn tin ChatOps tức thì",
        ai_c1_b3: "<strong>ADO.NET ERP Hub:</strong> AI kết nối thực thi truy vấn soi cấu trúc dữ liệu & SP trên DB 10.17.215.22",

        ai_c2_title: "Tự Động Phân Tích Task & Soi DB Sâu (analyze_task)",
        ai_c2_badge: "Task Analysis",
        ai_c2_b1: "<strong>Bóc tách Office BA/SA:</strong> Trích xuất 100% sơ đồ nghiệp vụ từ file Excel, Word, PPTX của BA/SA",
        ai_c2_b2: "<strong>Live DB Introspection:</strong> Đọc trực tiếp cấu trúc bảng, index & Stored Procedure trên DB thật",
        ai_c2_b3: "<strong>Báo cáo Task Analysis:</strong> Xuất tài liệu phân tích kỹ thuật, xác định root cause & giải pháp trước khi code",

        ai_c3_title: "Quality Gatekeeper & Release Script (check_code_change)",
        ai_c3_badge: "Quality Gate",
        ai_c3_b1: "<strong>An toàn giao dịch SQL:</strong> Bắt buộc bọc transaction BEGIN TRAN/COMMIT & kiểm tra idempotency",
        ai_c3_b2: "<strong>Bảo vệ an ninh UI:</strong> Chặn ném raw Exception ra màn hình, chuẩn hóa Business Exception",
        ai_c3_b3: "<strong>i18n & UTF-8 BOM:</strong> Quét đối soát từ điển đa ngôn ngữ XML/SQL & tự động ép chuẩn UTF-8 BOM cho IIS",

        ai_c4_title: "Tự Sinh Test Task & Điều Phối QA (create_test_task)",
        ai_c4_badge: "QA Dispatch",
        ai_c4_b1: "<strong>Sinh Subtask Kiểm thử:</strong> Tự động tạo subtask Jira cho QA Tester phụ trách với đầy đủ Test Matrix",
        ai_c4_b2: "<strong>Script Test Data & Rollback:</strong> Tự sinh script chuẩn bị dữ liệu mẫu và rollback an toàn đi kèm task",
        ai_c4_b3: "<strong>Điều phối ChatOps:</strong> Chuyển task sang trạng thái In Review & gửi tin nhắn Mattermost đích danh",

        // Systems Showcase
        systems_heading: "Hệ Thống Trọng Yếu & Dự Án Thực Tế",
        systems_sub: "6 hệ thống cốt lõi thiết kế và triển khai quy mô lớn phục vụ chuỗi nhà xưởng may mặc quốc tế",
        filter_all: "Tất Cả",
        filter_erp: "ERP & Backend",
        filter_ai: "AI & Automation",
        filter_iot: "IoT & Mobile",

        sys1_title: "FEA Enterprise ERP Platform",
        sys1_role: "Kiến trúc sư Trưởng & Lập trình Lõi • 7,550+ Commits",
        sys1_desc: "Hệ thống ERP sản xuất trung tâm điều hành chuỗi nhà máy quốc tế (Mua hàng, Kho, Tài chính, Kế hoạch, Sản xuất, Nhân sự). Tối ưu hóa truy vấn SQL Server phân tán và cấu trúc liên kết cơ sở dữ liệu liên nhà máy (Linked Server).",
        sys1_impact: "<strong>Thực tế:</strong> Đảm bảo toàn vẹn dữ liệu cho hàng triệu chứng từ/tháng, giảm 40% độ trễ xử lý các báo cáo tài chính và sản xuất lớn.",

        sys2_title: "Apparel Global Platform (AGP - ClickOnce)",
        sys2_role: "Kiến trúc sư Trưởng & Release Manager • 7,140+ Commits",
        sys2_desc: "Nền tảng ứng dụng Desktop ClickOnce quy mô lớn triển khai trên hàng trăm trạm máy tính nhà xưởng (PDM dữ liệu sản phẩm, đóng gói, vải). Xây dựng quy trình tự động nâng phiên bản ClickOnce CI/CD không gián đoạn.",
        sys2_impact: "<strong>Thực tế:</strong> Triển khai cập nhật tính năng tức thời đến hơn 500 máy trạm nhà xưởng mà không phát sinh thời gian chết (Zero Downtime).",

        sys3_title: "PPS & Thuật Toán AutoSewingPlan",
        sys3_role: "Tác giả Thuật toán & Core Dev • 1,580+ Commits",
        sys3_desc: "Thuật toán thông minh tự động tối ưu hóa sắp xếp layout và điều độ chuyền may theo thời gian thực; cân bằng đồng thời ràng buộc tiến độ nguyên phụ liệu, năng lực chuyền và đối soát tiến độ đơn hàng.",
        sys3_impact: "<strong>Thực tế:</strong> Rút ngắn thời gian lập kế hoạch chuyền từ 2 ngày xuống 15 phút, tối ưu hóa công suất máy móc chuyền may lên 92%.",

        sys4_title: "ITS.WebService & Mobile Industrial Suite",
        sys4_role: "Kiến trúc sư Trưởng Backend • 2,790+ Commits",
        sys4_desc: "Cụm Microservices & RESTful API trung tâm kết nối ứng dụng di động công nghiệp: Kiểm tra chất lượng (ITS.Mobile.QC), Điều hành sản xuất (ITSmart), Quản lý nguyên phụ liệu (CW, FW, SMM) và máy quét barcode.",
        sys4_impact: "<strong>Thực tế:</strong> Xử lý đồng thời hơn 500,000 lượt quét barcode/RFID và nhập liệu kiểm phẩm hàng ngày với độ trễ phản hồi dưới 80ms.",

        sys5_title: "RFID IoT & Kho Vải Thông Minh",
        sys5_role: "Kiến trúc sư Giải pháp IoT",
        sys5_desc: "Hệ thống kiểm soát an toàn kim gãy (RFIDScanNeedleSystem), định vị và quản lý cuộn vải kho thông minh bằng sóng RFID tần số cao (Zebra RFID SDK, Impinj Speedway Connect) kết hợp máy in mã vạch ZPL.",
        sys5_impact: "<strong>Thực tế:</strong> Loại bỏ hoàn toàn lỗi sót kim gãy trong thành phẩm may xuất khẩu, tăng 70% tốc độ kiểm kê vị trí cuộn vải kho nguyên liệu.",

        sys6_title: "DrakeAgent & Phoenix Multi-Agent Hub",
        sys6_role: "Sáng lập & Kiến trúc sư Trưởng • 2024 — Hiện tại",
        sys6_desc: "Nền tảng tác tử thông minh tích hợp trực tiếp vào môi trường kỹ thuật qua giao thức Model Context Protocol (MCP). Tự động phân tích task, review Merge Request, đối soát release script SQL và điều phối pipeline.",
        sys6_impact: "<strong>Thực tế:</strong> Giảm 65% thời gian tra soát nghiệp vụ kỹ thuật và ngăn chặn 100% rủi ro xung đột script release trên Production.",

        // Skills (Real Stack)
        skills_heading: "Năng Lực Lõi & Vũ Khí Công Nghệ",
        skills_sub: "Ma trận công nghệ được kiểm chứng qua hơn 30,000 commits thực tế trên hệ thống sản xuất",
        skill_c1_title: "Kiến Trúc & Hệ Thống Doanh Nghiệp",
        skill_c2_title: "Backend & Tối Ưu Cơ Sở Dữ Liệu",
        skill_c3_title: "AI Multi-Agent & Tự Động Hóa Kỹ Thuật",
        skill_c4_title: "IoT Công Nghiệp & Giao Diện Doanh Nghiệp",

        // Experience Section
        exp_heading: "Kinh Nghiệm Thực Chiến & Vị Trí Trọng Yếu",
        exp_sub: "Lộ trình dẫn dắt kiến trúc phần mềm và kỹ thuật sản xuất quy mô quốc tế",
        exp_r1_title: "Lead Software Architect & Tech Lead",
        exp_r1_meta: "Far Eastern Apparel Vietnam (FEAVN) • Tập đoàn Quốc tế Far Eastern",
        exp_r1_period: "(06/2022 — Hiện tại)",
        exp_r1_b1: "<strong>Chỉ đạo Kiến trúc Tổng thể:</strong> Lãnh đạo phát triển hệ sinh thái phần mềm sản xuất công nghiệp quy mô lớn phục vụ chuỗi nhà máy may mặc quốc tế với hàng nghìn người dùng và thiết bị IoT.",
        exp_r1_b2: "<strong>Tối ưu hóa Database & Linked Server:</strong> Trực tiếp tối ưu hàng nghìn Stored Procedure phức tạp, thiết kế liên kết phân tán (Linked Server) giữa các nhà máy, giảm 40% độ trễ xử lý dữ liệu lớn.",
        exp_r1_b3: "<strong>Phát hành AGP ClickOnce & PPS:</strong> Xây dựng quy trình tự động nâng version ClickOnce và phát hành CI/CD không gián đoạn (Zero Downtime) trên hàng trăm trạm máy tính nhà xưởng.",
        exp_r1_b4: "<strong>Khai phóng Tác tử AI vào SDLC:</strong> Tự xây dựng các bộ kỹ năng MCP tự động phân tích task, review code, kiểm soát chất lượng SQL release script và tạo subtask kiểm thử.",

        // Principles
        principles_heading: "Triết Lý Kỹ Thuật & Nguyên Tắc Kiến Trúc",
        principles_sub: "3 trụ cột bất biến định hình chất lượng kỹ thuật của mọi dòng mã",
        principle_1_title: "1. Zero-Specialized-Case Architecture",
        principle_1_desc: "Tuyệt đối không chắp vá logic cho từng case đơn lẻ. Mọi thành phần đều được thiết kế tổng quát, rõ ràng và mở rộng linh hoạt theo chuẩn hệ thống.",
        principle_2_title: "2. Data Integrity & Reliability First",
        principle_2_desc: "Dữ liệu là huyết mạch của doanh nghiệp. Tối ưu hóa truy vấn chuyên sâu, giao dịch ACID nghiêm ngặt, kiểm soát an toàn kết nối và chống nghẽn DB.",
        principle_3_title: "3. Action-First & Extreme Automation",
        principle_3_desc: "Tự động hóa triệt để các quy trình lặp lại bằng mã nguồn và AI Agent thông minh. Làm việc chuẩn xác, hành động dứt khoát và liên tục tối ưu hóa.",

        // Education
        edu_heading: "Học Vấn & Bằng Cấp",
        edu_degree: "Cử nhân / Kỹ sư Công nghệ Thông tin",
        edu_school: "Trường Đại học Thủ Dầu Một (TDMU) • Viện Công nghệ số",
        edu_period: "(2018 — 2022)",
        edu_desc: "Chuyên ngành Kỹ thuật Phần mềm & Hệ thống Thông tin. Tốt nghiệp loại Giỏi. Nghiên cứu sâu về Cấu trúc Dữ liệu & Giải thuật, Kiến trúc Hệ thống và Cơ sở Dữ liệu Phân tán.",

        // Footer
        footer_sub: "Thiết kế chuẩn mực • Vận hành bền bỉ quy mô lớn • Tích hợp AI Tác tử thế hệ mới",
        footer_copyright: "© 2026 VÕ THANH BÌNH (DRAKE) • LEAD SOFTWARE ARCHITECT • ALL RIGHTS RESERVED."
    },

    en: {
        // Navigation & Top Bar
        brand_name: "VO THANH BINH",
        brand_role: "LEAD ARCHITECT",
        btn_pdf: "Print / PDF (A4)",
        tagline: "Lead Software Architect • Enterprise ERP & AI Multi-Agent",
        role_title: "Lead Software Architect | Chief Solutions & AI Systems Engineer",
        header_bio: "Senior software solutions architect with over 4 years of proven experience designing and scaling large-scale manufacturing ERP systems (FEAVN • Far Eastern Group) and autonomous AI Multi-Agent platforms. Driven by the <em>\"Zero-Specialized-Case\"</em> doctrine — standardization, high availability, and real-world performance optimization.",
        location: "Binh Duong / Ho Chi Minh City, Vietnam",
        company: "Far Eastern Apparel Vietnam (FEAVN)",
        btn_github: "GitHub Profile",
        btn_contact: "Contact Direct",
        status_available: "AVAILABLE FOR PRODUCTION • 4+ YEARS LEAD ARCHITECT",

        // Quick Navigation Pills
        nav_metrics: "Metrics",
        nav_ecosystem: "Architecture Map",
        nav_sdlc: "AI Pipeline",
        nav_systems: "Systems",
        nav_skills: "Skills",
        nav_experience: "Experience",

        // Live Telemetry HUD
        hud_label: "LIVE TELEMETRY:",
        hud_t1: "FEA ERP • MES • 99.99% UPTIME",
        hud_t2: "LIVE DB: 10.17.215.22 • LINKED SERVER ACTIVE",
        hud_t3: "AGP CLICKONCE • 500+ TERMINALS • 0 DOWNTIME",
        hud_t4: "AI MULTI-AGENT HUB • MCP READY • FUNCTION CALLING",
        hud_t5: "RFID SCANNER ENGINE • LATENCY < 80ms",
        hud_t6: "ARCHITECTURE: ZERO-SPECIALIZED-CASE",

        // Impact Stats Ribbon
        metrics_heading: "Production Impact Metrics & Real-World Telemetry",
        metrics_sub: "Directly measured from international garment manufacturing operations and autonomous AI agent workflows",
        stat_commits_num: "30,000+",
        stat_commits_label: "Enterprise Commits",
        stat_commits_desc: "Production-grade shipped code to date",
        stat_commits_badge: "Shipped",

        stat_uptime_num: "99.99%",
        stat_uptime_label: "Factory Uptime",
        stat_uptime_desc: "High-availability operation across workshops",
        stat_uptime_badge: "Zero Downtime",

        stat_ai_num: "10+",
        stat_ai_label: "AI Agents & Custom MCP",
        stat_ai_desc: "End-to-end automation from spec to QA dispatch",
        stat_ai_badge: "Autonomous",

        stat_scans_num: "500K+",
        stat_scans_label: "Scans / Day",
        stat_scans_desc: "Real-time RFID, Barcode & QC transactions",
        stat_scans_badge: "<80ms Latency",

        stat_latency_num: "-40%",
        stat_latency_label: "DB Query Latency",
        stat_latency_desc: "Stored Procedure & Linked Server optimization",
        stat_latency_badge: "Optimized",

        stat_efficiency_num: "92%",
        stat_efficiency_label: "Line Efficiency",
        stat_efficiency_desc: "AutoSewingPlan reduced scheduling from 2 days -> 15m",
        stat_efficiency_badge: "AutoSewingPlan",

        // Summary
        summary_heading: "Architectural Doctrine & Engineering Philosophy",
        summary_text: "I champion the <strong>\"Zero-Specialized-Case\"</strong> principle: rejecting fragmented ad-hoc patches in favor of resilient, generalized architectural abstractions to prevent technical debt. Backed by <strong>30,000+ production commits</strong> in high-concurrency international garment manufacturing operations, I leverage <strong>Autonomous AI Multi-Agents via Model Context Protocol (MCP)</strong> across daily engineering: from BA requirement extraction and live database introspection to SQL transaction gatekeeping and automated QA matrix generation.",

        // Interactive Ecosystem Architecture Map
        eco_heading: "Enterprise Architecture Ecosystem Topology",
        eco_sub: "Interconnected network map between Enterprise ERP Core, Distributed Databases, Floor IoT & Autonomous AI Agent Hub",
        eco_node_erp: "FEA ERP CORE",
        eco_node_erp_sub: "C# .NET • SQL Tuning",
        eco_node_db: "LINKED SERVER DB",
        eco_node_db_sub: "10.17.215.22 • ACID Locks",
        eco_node_agp: "AGP CLICKONCE",
        eco_node_agp_sub: "500+ Workstations",
        eco_node_pps: "PPS ALGO ENGINE",
        eco_node_pps_sub: "AutoSewingPlan • 92% Line",
        eco_node_mobile: "ITS.MOBILE & QC",
        eco_node_mobile_sub: "Microservices • <80ms",
        eco_node_rfid: "RFID & FABRIC WAREHOUSE",
        eco_node_rfid_sub: "Zebra • Impinj Gateway",
        eco_node_ai: "DRAKE AGENT & MCP",
        eco_node_ai_sub: "AI Multi-Agent Hub",
        eco_hint: "✦ Click on any architecture node to inspect technical stack & operational metrics",

        // AI Multi-Agent SDLC Pipeline Infographic
        ai_pipeline_heading: "Autonomous Multi-Agent SDLC Pipeline Infographic",
        ai_pipeline_sub: "Production-grade autonomous workflows running daily via Model Context Protocol (MCP), connected directly to live enterprise infrastructure",
        step1_title: "1. BA/SA Requirement Extraction",
        step1_desc: "AI automatically parses and extracts 100% of business flowcharts from Excel, Word, PPTX specs",
        step2_title: "2. Deep DB Introspection (analyze_task)",
        step2_desc: "Direct schema, index & active Stored Procedure inspection on live DB 10.17.215.22 prior to coding",
        step3_title: "3. Quality & Security Gate (check_code_change)",
        step3_desc: "Enforces BEGIN TRAN/COMMIT blocks, suppresses raw exceptions, ensures idempotency & UTF-8 BOM",
        step4_title: "4. Automated QA Dispatch (create_test_task)",
        step4_desc: "Auto-creates Jira Subtasks with edge Test Matrices, mock datasets, safe rollback logic & ChatOps",

        ai_c1_title: "Multi-Agent Infrastructure & Custom MCP Servers",
        ai_c1_badge: "Custom MCP",
        ai_c1_b1: "<strong>GitLab MCP:</strong> Automated git diff analysis, MR description parsing & attachment retrieval via API",
        ai_c1_b2: "<strong>Jira & Mattermost MCP:</strong> Requirement intake, progress sync & instant ChatOps dispatch",
        ai_c1_b3: "<strong>ADO.NET ERP Hub:</strong> AI agent executes live schema introspection & SP queries on ERP database 10.17.215.22",

        ai_c2_title: "Automated Task Analysis & Deep DB Introspection (analyze_task)",
        ai_c2_badge: "Task Analysis",
        ai_c2_b1: "<strong>Office Parsing:</strong> Extracts 100% of business flow diagrams from Excel, Word, PPTX specification files",
        ai_c2_b2: "<strong>Live DB Introspection:</strong> Direct schema, index & active Stored Procedure inspection on production database",
        ai_c2_b3: "<strong>Task Analysis Report:</strong> Generates architectural reports detailing root causes and execution blueprints prior to coding",

        ai_c3_title: "Quality Gatekeeper & Release Scripts (check_code_change)",
        ai_c3_badge: "Quality Gate",
        ai_c3_b1: "<strong>SQL Safety:</strong> Enforces ACID transaction blocks (BEGIN TRAN/COMMIT) & idempotent insert verification",
        ai_c3_b2: "<strong>Security UX:</strong> Zero raw technical exceptions leaked to UI; standardizes Business Exceptions",
        ai_c3_b3: "<strong>i18n & UTF-8 BOM:</strong> Verifies localized dictionary keys (XML/SQL) & enforces UTF-8 with BOM for IIS",

        ai_c4_title: "Automated Test Matrix & QA Dispatch (create_test_task)",
        ai_c4_badge: "QA Dispatch",
        ai_c4_b1: "<strong>Test Matrix Generation:</strong> Creates Jira QA subtasks populated with comprehensive edge test matrices",
        ai_c4_b2: "<strong>SQL Test Data & Rollback:</strong> Provisions mock test dataset scripts along with safe rollback logic",
        ai_c4_b3: "<strong>ChatOps Handover:</strong> Transitions task to In Review & notifies designated QA testers via Mattermost",

        // Systems Showcase
        systems_heading: "Flagship Architecture & Production Systems",
        systems_sub: "6 core enterprise platforms engineered and deployed across international manufacturing operations",
        filter_all: "All",
        filter_erp: "ERP & Backend",
        filter_ai: "AI & Automation",
        filter_iot: "IoT & Mobile",

        sys1_title: "FEA Enterprise ERP Platform",
        sys1_role: "Lead Architect & Core Dev • 7,550+ Commits",
        sys1_desc: "Central manufacturing ERP orchestrating multi-plant international operations (Procurement, Warehouse, Finance, Planning, Production, HR). Optimizes distributed SQL Server queries and cross-plant database links (Linked Server).",
        sys1_impact: "<strong>Production Reality:</strong> Guarantees ACID consistency for millions of monthly vouchers; reduced high-volume financial and production reporting latency by 40%.",

        sys2_title: "Apparel Global Platform (AGP - ClickOnce)",
        sys2_role: "Lead Architect & Release Manager • 7,140+ Commits",
        sys2_desc: "Large-scale ClickOnce smart client desktop platform across hundreds of plant workstations (Product Data Management, fabric states, packing). Automated zero-downtime CI/CD release pipelines.",
        sys2_impact: "<strong>Production Reality:</strong> Instantaneous feature updates across 500+ factory floor terminals with Zero Downtime.",

        sys3_title: "PPS & AutoSewingPlan Algorithm",
        sys3_role: "Algorithm Creator & Core Dev • 1,580+ Commits",
        sys3_desc: "Constraint optimization algorithm engine for dynamic real-time sewing line scheduling, balancing multi-variable constraints between raw material arrival, line capacity curves, and order deadlines.",
        sys3_impact: "<strong>Production Reality:</strong> Reduced sewing schedule generation from 2 full days to 15 minutes; boosted machine capacity utilization to 92%.",

        sys4_title: "ITS.WebService & Mobile Industrial Suite",
        sys4_role: "Backend Lead Architect • 2,790+ Commits",
        sys4_desc: "Central Microservices & RESTful API cluster serving industrial handheld apps: Mobile Quality Control (ITS.Mobile.QC), Smart Manufacturing (ITSmart), Raw Material Logistics (CW, FW, SMM), and barcode scanners.",
        sys4_impact: "<strong>Production Reality:</strong> Concurrently processes 500,000+ daily barcode/RFID scans and audit transactions (<80ms response latency).",

        sys5_title: "RFID IoT & Smart Fabric Warehouse",
        sys5_role: "IoT Solutions Architect",
        sys5_desc: "Broken needle safety inspection system (RFIDScanNeedleSystem), real-time smart fabric roll tracking via UHF RFID (Zebra RFID SDK, Impinj Speedway Connect), and automated industrial ZPL barcode printing.",
        sys5_impact: "<strong>Production Reality:</strong> 100% elimination of undetected broken needle hazards in export apparel; boosted warehouse roll inventory audit speed by 70%.",

        sys6_title: "DrakeAgent & Phoenix Multi-Agent Hub",
        sys6_role: "Founder & Chief Architect • 2024 — Present",
        sys6_desc: "Next-generation intelligent agent platform via Model Context Protocol (MCP). Automates requirement analysis, Merge Request code reviews, SQL release script verification, and DevOps pipelines.",
        sys6_impact: "<strong>Production Reality:</strong> Slashed technical analysis overhead by 65% and eliminated 100% of production SQL release conflicts.",

        // Skills (Real Stack)
        skills_heading: "Core Competencies & Technology Arsenal",
        skills_sub: "Battle-tested technology matrix verified over 30,000+ real production commits",
        skill_c1_title: "Architecture & System Design",
        skill_c2_title: "Backend & Database Engineering",
        skill_c3_title: "AI Multi-Agent & Engineering Automation",
        skill_c4_title: "Industrial IoT & Enterprise UI",

        // Experience Section
        exp_heading: "Professional Experience & Technical Leadership",
        exp_sub: "Track record of architectural leadership and mission-critical production operations",
        exp_r1_title: "Lead Software Architect & Tech Lead",
        exp_r1_meta: "Far Eastern Apparel Vietnam (FEAVN) • Far Eastern Group",
        exp_r1_period: "(06/2022 — Present)",
        exp_r1_b1: "<strong>Enterprise Architecture Leadership:</strong> Full technological oversight of software ecosystem serving thousands of plant personnel, tens of workshops, and industrial IoT devices across international apparel factories.",
        exp_r1_b2: "<strong>Database Tuning & Linked Server:</strong> Directly optimized thousands of complex Stored Procedures; engineered cross-plant Linked Server pipelines, cutting large-scale data latency by 40%.",
        exp_r1_b3: "<strong>ClickOnce & PPS Distribution:</strong> Built automated ClickOnce versioning and zero-downtime release pipelines across hundreds of factory floor terminals.",
        exp_r1_b4: "<strong>AI Engineering in SDLC:</strong> Built proprietary MCP skills automating task requirement parsing, code reviews, SQL release script verification, and automated QA subtask generation.",

        // Principles
        principles_heading: "Core Philosophy & Engineering Principles",
        principles_sub: "3 immutable pillars governing the engineering quality of every line of code",
        principle_1_title: "1. Zero-Specialized-Case Architecture",
        principle_1_desc: "Never patch logic for isolated single cases. Every component is generalized to robust, extensible architectural abstractions.",
        principle_2_title: "2. Data Integrity & Reliability First",
        principle_2_desc: "Data is the lifeblood of enterprise operations. Relentlessly optimize database I/O costs, enforce strict ACID transactions, and prevent locks.",
        principle_3_title: "3. Action-First & Extreme Automation",
        principle_3_desc: "Aggressively automate repetitive workflows with resilient code and intelligent AI agents. Address technical challenges decisively at their root causes.",

        // Education
        edu_heading: "Education & Credentials",
        edu_degree: "Bachelor of Information Technology / Software Engineering",
        edu_school: "Thu Dau Mot University (TDMU) • Digital Technology Institute",
        edu_period: "(2018 — 2022)",
        edu_desc: "Major in Software Engineering & Information Systems. Graduated with Honors. In-depth focus on Data Structures & Algorithms, Distributed Systems, and Advanced Database Management.",

        // Footer
        footer_sub: "Engineered with Precision • Enterprise Industrial Stability • Next-Gen AI Multi-Agent Powered",
        footer_copyright: "© 2026 VO THANH BINH (DRAKE) • LEAD SOFTWARE ARCHITECT • ALL RIGHTS RESERVED."
    }
};

// Global Language Application Function
function applyLanguage(lang) {
    const targetLang = (lang === 'en' || lang === 'vi') ? lang : 'vi';
    localStorage.setItem('drake_lang', targetLang);
    document.documentElement.lang = targetLang;

    // Update active switcher buttons
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-lang') === targetLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const dict = translations[targetLang];
    if (!dict) return;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Update URL param without page reload
    if (window.history && window.history.replaceState) {
        const url = new URL(window.location);
        url.searchParams.set('lang', targetLang);
        window.history.replaceState({}, '', url);
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const docLang = document.documentElement.getAttribute('lang') || 'vi';
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const savedLang = localStorage.getItem('drake_lang');
    const browserLang = (navigator.language && navigator.language.startsWith('en')) ? 'en' : 'vi';

    let initialLang = urlLang;
    if (!initialLang) {
        if (docLang === 'en') {
            initialLang = 'en';
        } else {
            initialLang = savedLang || browserLang || docLang;
        }
    }

    applyLanguage(initialLang);

    // Attach click listeners to language switch buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const chosenLang = btn.getAttribute('data-lang');
            applyLanguage(chosenLang);
        });
    });
});
