// Challenge - Sports clubz Application Core JavaScript Engine v1.2

// 1. Multilingual Translation Dictionaries (i18n) for 7 Languages
const i18nData = {
  en: {
    tagline: "Sport community app for all sports for everyone",
    top_my_sports: "My Sports:",
    btn_manage_sports: "All Sports Directory",
    nearest_session_alert: "Nearest Session:",
    ai_random_partner: "Partner",
    ai_random_sport: "Sport",
    ai_travel_club: "Travel Club",
    nav_discover: "Discover & Live Map",
    nav_calendar: "Club Sessions & Calendar",
    nav_challenge: "Challenge System",
    nav_rankings: "Rankings",
    nav_clubs: "Clubs & Teams",
    nav_payments: "Payments",
    nav_profile: "Profile & Security",
    cta_challenge: "Create Challenge",
    map_title: "Real-Time Discover & Location Preview",
    map_subtitle: "Find registered sports clubs, nearby players open for immediate match, and tournaments.",
    filter_clubs: "Clubs",
    filter_partners: "Partners (Live)",
    filter_tournaments: "Competitions",
    all_sports: "All Sports",
    selected_location_info: "Selected Details",
    click_marker_prompt: "Click any pin on the map or club in the list to view live details and participate.",
    btn_ping_partner: "Ping Partner for Match",
    btn_participate_club: "Participate / Join Session",
    btn_challenge_now: "Send Official Challenge",
    map_broadcast_status: "Your GPS Broadcast: Active (Consented)",
    discover_chat_title: "Discover Chat & Interactive Partner Pings",
    discover_chat_desc: "Selected partners queue, partner ping acceptance gating, group chat creation, and club chatrooms.",
    tab_partner_chat: "Partner Pings",
    tab_clubrooms: "Club Chatrooms",
    btn_invite_member: "Invite Member",
    btn_group_chat: "Start Group Chat",
    cal_badge: "Nearest Clubs Session Schedule",
    cal_title: "Nearest Club Sessions & Required Payment Details",
    cal_desc: "Browse upcoming regular sessions from clubs nearest to your location (Seoul Metro), check required session and court dues, and book instantly.",
    filter_sport_label: "Filter Sport:",
    challenge_hub_title: "Competitive Challenge & Dual Consent Match Record",
    challenge_rules_desc: "Lower rankers can challenge opponents 2 to 3 ranks above their current level. Only players or clubs in the same sport category can match. New players start at Rank 999 and earn revised ranking after mutual verification of match results!",
    btn_start_challenge: "Issue Challenge",
    individual_challenge: "Individual Challenge (2~3 Ranks Above)",
    club_challenge: "Club-to-Club Challenge",
    my_current_sport: "Current Sport:",
    my_rank_status: "Your Rank: #5 (Eligible Targets: #2, #3)",
    col_player: "Player / User",
    col_region: "Region",
    col_sport: "Sport",
    col_record: "Win / Matches",
    col_eligibility: "Eligibility",
    col_action: "Action",
    match_consent_title: "Match Result Consent & Verification Queue",
    match_consent_desc: "Both parties must consent to the submitted score for rank calculation and official rating revision.",
    ranking_header: "Rankings & Leaderboards",
    ranking_sub: "Rankings filtered per sport category and region (City, Regional, National, Global)",
    rank_personal: "Personal",
    rank_club: "Club",
    col_name: "Name / Entity",
    col_score: "Score (Pts)",
    col_tier: "Level / Tier",
    clubs_header: "Sports Clubs & Teams Directory",
    clubs_sub: "Explore active clubs, join regular sessions, or create your own club.",
    btn_register_club: "Register New Club",
    payments_title: "Unified Sports Payment System",
    payments_desc: "Manage club membership dues, team training fees, and competition / tournament entry payments securely.",
    payable_items: "Dues & Tournament Entries",
    pay_now: "Pay Now",
    transaction_history: "Recent Payment Receipts",
    supported_gateways: "Supported Gateways",
    gateway_desc: "Compliant with PCI-DSS, local Korean PG regulations, and international Stripe/PayPal frameworks.",
    prof_code: "Unique User Code",
    prof_sports: "Interested Sports",
    prof_phone: "Contact Number",
    prof_location_consent: "Live Location Sharing",
    manage_privacy: "Manage Consent & Privacy Preferences",
    infosec_title: "Information Security & Regional Compliance Matrix",
    infosec_sub: "Global standards (GDPR, ISO 27001) and regional policies (Korean PIPA, Japan APPI, etc.) applied per region.",
    modal_all_sports_title: "All Sport Categories Directory",
    modal_all_sports_desc: "Select sports to add or toggle in your personal profile top bar.",
    invite_modal_title: "Member Invitation Options",
    modal_consent_title: "Welcome to Challenge - Sports clubz",
    modal_select_lang: "Select Your Language / 언어 선택:",
    modal_consent_intro: "To provide real-time local sports team matching, ranking computation, and interactive partner discovery, please review and confirm the terms below:",
    consent_terms: "[Required] Agree to Service Terms & Global Information Security Policy (GDPR/PIPA)",
    consent_loc: "[Required] Agree to GPS location sharing for Discover Live Map & Real-time Partner Finding",
    consent_match: "[Required] Agree to Mutual Verification & Consent system for Recording Match Scores",
    btn_agree_continue: "Confirm and Enter App",
    modal_new_challenge: "Create Official Challenge",
    challenge_type: "Challenge Type:",
    form_sport: "Sport Category (Must match opponent):",
    form_target: "Opponent / Target:",
    form_date_loc: "Date & Venue:",
    form_rule_notice: "Only challenges against 2~3 ranks above are permitted for official rating adjustment. Both sides must agree before result is saved to Google Sheet database.",
    checkout_title: "Secure Payment Checkout",
    choose_payment_method: "Select Payment Method:"
  },
  ko: {
    tagline: "모두를 위한 모든 스포츠 커뮤니티 앱",
    top_my_sports: "내 관심 종목:",
    btn_manage_sports: "전체 종목 관리",
    nearest_session_alert: "가장 가까운 모임:",
    ai_random_partner: "파트너",
    ai_random_sport: "종목 추천",
    ai_travel_club: "원정 클럽",
    nav_discover: "탐색 & 실시간 지도",
    nav_calendar: "클럽 모임 캘린더",
    nav_challenge: "챌린지 시스템",
    nav_rankings: "랭킹 / 순위",
    nav_clubs: "클럽 & 팀",
    nav_payments: "결제 시스템",
    nav_profile: "프로필 & 보안",
    cta_challenge: "챌린지 신청",
    map_title: "실시간 클럽 및 파트너 탐색 지도",
    map_subtitle: "등록된 스포츠 클럽, 즉석 매칭을 희망하는 주변 파트너, 공식 대회를 지도에서 확인하세요.",
    filter_clubs: "클럽",
    filter_partners: "파트너 (실시간)",
    filter_tournaments: "대회/경기",
    all_sports: "전체 종목",
    selected_location_info: "선택된 상세 정보",
    click_marker_prompt: "지도의 핀 또는 클럽 목록을 클릭하면 상세 정보를 보고 세션에 참여할 수 있습니다.",
    btn_ping_partner: "파트너 핑 보내기 (채팅 요청)",
    btn_participate_club: "클럽 세션 참여하기",
    btn_challenge_now: "공식 챌린지 신청하기",
    map_broadcast_status: "내 GPS 위치 노출: 활성화 (동의 완료)",
    discover_chat_title: "실시간 탐색 채팅 & 파트너 핑(Ping) 시스템",
    discover_chat_desc: "검색 파트너 목록, 핑 수락 기반 채팅 게이팅, 그룹 채팅 및 클럽 전용 채팅방 지원",
    tab_partner_chat: "파트너 핑/채팅",
    tab_clubrooms: "클럽 단체방",
    btn_invite_member: "멤버 초대",
    btn_group_chat: "그룹 채팅 생성",
    cal_badge: "인근 클럽 정기 세션 일정",
    cal_title: "내 주변 클럽 모임 캘린더 & 회비 결제 안내",
    cal_desc: "현재 위치(서울권) 기준 가장 가까운 클럽의 정기 훈련 및 참가비(대관료/게스트비)를 확인하고 즉시 예약 결제하세요.",
    filter_sport_label: "종목 필터:",
    challenge_hub_title: "도전 챌린지 및 양측 동의 경기 기록 시스템",
    challenge_rules_desc: "하위 랭커는 본인보다 2~3순위 높은 상위 랭커에게만 도전할 수 있습니다. 동일 종목 플레이어/클럽 간에만 매칭되며, 신규 유저는 랭킹 999위에서 시작하여 상호 경기결과 동의 후 공식 랭킹이 갱신됩니다.",
    btn_start_challenge: "챌린지 신청하기",
    individual_challenge: "개인전 챌린지 (2~3위 상위 랭커 대상)",
    club_challenge: "클럽 대항전 챌린지",
    my_current_sport: "현재 선택 종목:",
    my_rank_status: "내 순위: 5위 (도전 가능 대상: 2위, 3위)",
    col_player: "선수 / 유저명",
    col_region: "지역",
    col_sport: "종목",
    col_record: "승률 / 경기수",
    col_eligibility: "도전 가능 여부",
    col_action: "동작",
    match_consent_title: "경기 결과 양측 동의 및 승인 대기열",
    match_consent_desc: "점수 및 랭킹 반영을 위해 경기 참가자 양측 모두 결과에 동의해야 Google Sheet DB에 공식 기록됩니다.",
    ranking_header: "공식 랭킹 & 리더보드",
    ranking_sub: "종목별, 지역별(시/군/구, 광역, 전국, 글로벌) 상세 랭킹 제공",
    rank_personal: "개인 랭킹",
    rank_club: "클럽 랭킹",
    col_name: "이름 / 클럽명",
    col_score: "누적 점수",
    col_tier: "레벨 / 등급",
    clubs_header: "스포츠 클럽 & 팀 디렉토리",
    clubs_sub: "활동 중인 스포츠 클럽을 확인하고 정기 모임에 참가하거나 신규 클럽을 등록하세요.",
    btn_register_club: "신규 클럽 등록",
    payments_title: "통합 스포츠 결제 시스템",
    payments_desc: "클럽 회비, 팀 훈련 대관비, 토너먼트/대회 참가비를 안전하게 결제 관리하세요.",
    payable_items: "납부 항목 및 대회 참가비",
    pay_now: "결제하기",
    transaction_history: "최근 결제 영수증",
    supported_gateways: "지원 결제 수단",
    gateway_desc: "국내 PG사 표준 규격 및 전자금융거래법, 글로벌 Stripe/PayPal 에스크로 규정을 준수합니다.",
    prof_code: "고유 회원 코드",
    prof_sports: "관심 스포츠 종목",
    prof_phone: "연락처",
    prof_location_consent: "실시간 위치 공유 상태",
    manage_privacy: "동의 및 보안 설정 변경",
    infosec_title: "정보보안 및 지역별 규제 준수 현황",
    infosec_sub: "글로벌 표준(GDPR, ISO 27001) 및 지역별 개인정보보호법(한국 PIPA, 일본 APPI 등) 엄격 적용",
    modal_all_sports_title: "전체 스포츠 종목 디렉토리",
    modal_all_sports_desc: "상단 바에 노출할 관심 스포츠를 선택하거나 변경할 수 있습니다.",
    invite_modal_title: "멤버 초대 옵션",
    modal_consent_title: "Challenge - Sports clubz 앱 시작하기",
    modal_select_lang: "사용 언어 선택:",
    modal_consent_intro: "실시간 스포츠 팀 매칭, 위치 기반 파트너 찾기, 랭킹 기록을 위해 아래 필수 약관에 동의해주세요:",
    consent_terms: "[필수] 서비스 이용약관 및 글로벌 정보보안 규정(GDPR/개인정보보호법) 동의",
    consent_loc: "[필수] 실시간 파트너 매칭 및 지도 탐색을 위한 GPS 위치정보 수집/이용 동의",
    consent_match: "[필수] 공정한 순위 관리를 위한 경기 결과 양측 상호 승인제 동의",
    btn_agree_continue: "동의하고 시작하기",
    modal_new_challenge: "공식 챌린지 생성",
    challenge_type: "챌린지 구분:",
    form_sport: "경기 종목 (상대방과 동일 종목 필수):",
    form_target: "상대 선수 또는 상대 클럽명:",
    form_date_loc: "일시 및 경기 장소:",
    form_rule_notice: "자신보다 2~3위 높은 상위 랭커에게만 도전 가능하며, 양측이 동의해야 점수가 반영됩니다.",
    checkout_title: "안전 결제 진행",
    choose_payment_method: "결제 수단 선택:"
  },
  ja: {
    tagline: "すべての人のためのスポーツコミュニティアプリ",
    top_my_sports: "マイ競技:",
    btn_manage_sports: "全競技一覧",
    nearest_session_alert: "最寄りのセッション:",
    ai_random_partner: "パートナー",
    ai_random_sport: "競技提案",
    ai_travel_club: "遠征クラブ",
    nav_discover: "探索＆リアルタイム地図",
    nav_calendar: "クラブカレンダー",
    nav_challenge: "チャレンジシステム",
    nav_rankings: "ランキング",
    nav_clubs: "クラブ＆チーム",
    nav_payments: "決済システム",
    nav_profile: "プロフィールとセキュリティ",
    cta_challenge: "挑戦状を送る",
    map_title: "リアルタイムクラブ・パートナー発見マップ",
    map_subtitle: "登録クラブ、即時対戦可能な周辺パートナー、大会を地図で確認できます。",
    filter_clubs: "クラブ",
    filter_partners: "パートナー (リアルタイム)",
    filter_tournaments: "大会",
    all_sports: "すべての競技",
    selected_location_info: "選択された詳細情報",
    click_marker_prompt: "地図のピンまたはクラブ一覧をクリックして詳細を確認し、参加できます。",
    btn_ping_partner: "対戦ピンを送る",
    btn_participate_club: "クラブに参加する",
    btn_challenge_now: "チャレンジを申請する",
    map_broadcast_status: "GPS位置共有: 有効 (同意済み)",
    discover_chat_title: "探索チャット＆ピン機能",
    discover_chat_desc: "ピン承認後の個別チャット、グループチャット、クラブチャットルーム",
    tab_partner_chat: "パートナーピン",
    tab_clubrooms: "クラブチャット",
    btn_invite_member: "メンバー招待",
    btn_group_chat: "グループチャット開始",
    cal_badge: "最寄りクラブ練習日程",
    cal_title: "クラブカレンダー＆参加費決済",
    cal_desc: "現在地から最も近いクラブ練習日程と必要費用を確認し、即時予約できます。",
    filter_sport_label: "種目絞り込み:",
    challenge_hub_title: "挑戦チャレンジおよび双方同意試合記録システム",
    challenge_rules_desc: "下位ランカーは自身の順位より2〜3位上位の相手にのみ挑戦できます。同一種目でのみ対戦可能で、新規ユーザーはランク999からスタートします。",
    btn_start_challenge: "チャレンジ申請",
    individual_challenge: "個人戦 (2〜3位上の相手)",
    club_challenge: "クラブ対抗戦",
    my_current_sport: "選択中の種目:",
    my_rank_status: "現在の順位: 5位 (挑戦対象: 2位, 3位)",
    col_player: "選手 / ユーザー名",
    col_region: "地域",
    col_sport: "種目",
    col_record: "勝率 / 試合数",
    col_eligibility: "挑戦資格",
    col_action: "アクション",
    match_consent_title: "試合結果の双方同意・承認待ち",
    match_consent_desc: "公正なレーティング計算のため、双方の同意後に公式記録として反映されます。",
    ranking_header: "公式ランキング＆リーダーボード",
    ranking_sub: "競技別、地域別（市区町村、都道府県、全国、世界）ランキング",
    rank_personal: "個人ランキング",
    rank_club: "クラブランキング",
    col_name: "名前 / クラブ名",
    col_score: "累計スコア",
    col_tier: "レベル / 階級",
    clubs_header: "スポーツクラブ＆チーム一覧",
    clubs_sub: "活動中のクラブを探して練習に参加するか、新規クラブを設立しましょう。",
    btn_register_club: "新規クラブ登録",
    payments_title: "統合スポーツ決済システム",
    payments_desc: "クラブ会費、チーム練習場費用、大会参加費を安全に決済管理できます。",
    payable_items: "支払い項目一覧",
    pay_now: "今すぐ支払う",
    transaction_history: "最近の領収書",
    supported_gateways: "対応決済ゲートウェイ",
    gateway_desc: "PCI-DSSおよび現地電子決済基準に準拠した安全なエスクロー決済です。",
    prof_code: "固有ユーザーコード",
    prof_sports: "関心のあるスポーツ",
    prof_phone: "連絡先",
    prof_location_consent: "位置情報共有ステータス",
    manage_privacy: "同意およびプライバシー設定の管理",
    infosec_title: "情報セキュリティおよび地域コンプライアンス",
    infosec_sub: "GDPR、APPI、韓国個人情報保護法等の地域ポリシーを適用",
    modal_all_sports_title: "全競技カテゴリ一覧",
    modal_all_sports_desc: "上部に表示する関心種目を選択できます。",
    invite_modal_title: "メンバー招待",
    modal_consent_title: "Challenge - Sports clubz へようこそ",
    modal_select_lang: "言語選択:",
    modal_consent_intro: "マッチング、ランキング計算、位置情報利用のため規約をご確認ください:",
    consent_terms: "[必須] 利用規約および情報セキュリティ方針への同意",
    consent_loc: "[必須] リアルタイム位置情報共有への同意",
    consent_match: "[必須] 試合結果の双方同意制への同意",
    btn_agree_continue: "同意して開始する",
    modal_new_challenge: "公式チャレンジを作成",
    challenge_type: "チャレンジ種別:",
    form_sport: "競技種目 (相手と一致必須):",
    form_target: "対戦相手またはクラブ名:",
    form_date_loc: "日時および場所:",
    form_rule_notice: "2〜3位上の上位ランカーにのみ挑戦可能で、双方同意後に結果が登録されます。",
    checkout_title: "安全な決済",
    choose_payment_method: "決済方法を選択:"
  },
  "zh-CN": {
    tagline: "面向所有人的全能体育社区应用",
    top_my_sports: "我的关注运动:",
    btn_manage_sports: "全运动项目库",
    nearest_session_alert: "最近活动安排:",
    ai_random_partner: "匹配搭档",
    ai_random_sport: "推荐运动",
    ai_travel_club: "外展俱乐部",
    nav_discover: "发现与实时地图",
    nav_calendar: "俱乐部日历与费用",
    nav_challenge: "挑战系统",
    nav_rankings: "排行榜",
    nav_clubs: "俱乐部与战队",
    nav_payments: "支付系统",
    nav_profile: "个人资料与安全",
    cta_challenge: "发起挑战",
    map_title: "实时俱乐部与运动搭档发现地图",
    map_subtitle: "在地图上查找注册俱乐部、附近的即时比赛搭档及锦标赛。",
    filter_clubs: "俱乐部",
    filter_partners: "实时搭档",
    filter_tournaments: "赛事",
    all_sports: "所有运动项目",
    selected_location_info: "选中详细信息",
    click_marker_prompt: "点击地图图钉或列表中的俱乐部即可查看详细信息并参加。",
    btn_ping_partner: "向球友发送即时呼叫 (Ping)",
    btn_participate_club: "参加俱乐部活动",
    btn_challenge_now: "发送挑战申请",
    map_broadcast_status: "GPS位置广播: 活跃 (已同意)",
    discover_chat_title: "实时发现聊天与搭档呼叫系统",
    discover_chat_desc: "搭档呼叫审核激活机制、群组聊天及俱乐部官方聊天室",
    tab_partner_chat: "搭档呼叫/私信",
    tab_clubrooms: "俱乐部聊天室",
    btn_invite_member: "邀请成员",
    btn_group_chat: "创建群聊",
    cal_badge: "就近俱乐部活动日历",
    cal_title: "附近俱乐部活动日程与费用明细",
    cal_desc: "查看距离您最近的俱乐部活动日程，查看场地费/会费并在线安全预约。",
    filter_sport_label: "项目筛选:",
    challenge_hub_title: "天梯挑战与双向同意比赛记录系统",
    challenge_rules_desc: "低排位选手仅可向上挑战高出自身2~3位的对手。同一运动项目方可匹配，新用户初始排位为999，双方确认成绩后更新排名！",
    btn_start_challenge: "发起挑战",
    individual_challenge: "个人挑战 (高自身2~3位)",
    club_challenge: "俱乐部对抗赛",
    my_current_sport: "当前运动:",
    my_rank_status: "您的排位: 第5名 (可挑战目标: 第2名, 第3名)",
    col_player: "选手 / 用户",
    col_region: "地区",
    col_sport: "运动项目",
    col_record: "胜率 / 场次",
    col_eligibility: "挑战资格",
    col_action: "操作",
    match_consent_title: "比赛结果双向同意与审核队列",
    match_consent_desc: "双方均需确认比赛比分，系统才会正式录入并重新计算天梯积分。",
    ranking_header: "官方排名与排行榜",
    ranking_sub: "按运动类别与地区（城市、区域、全国、全球）精准筛选",
    rank_personal: "个人榜",
    rank_club: "俱乐部榜",
    col_name: "名称 / 俱乐部",
    col_score: "积分",
    col_tier: "段位 / 等级",
    clubs_header: "体育俱乐部与战队名录",
    clubs_sub: "探索活跃俱乐部，参加定期训练活动，或创建自己的俱乐部。",
    btn_register_club: "注册新俱乐部",
    payments_title: "统一体育支付系统",
    payments_desc: "安全支付与管理俱乐部会费、场地公摊费及赛事报名费。",
    payable_items: "待缴费用与比赛报名",
    pay_now: "立即支付",
    transaction_history: "最近支付收据",
    supported_gateways: "支持的支付渠道",
    gateway_desc: "符合PCI-DSS安全认证与跨境合规标准，资金受第三方托管保障。",
    prof_code: "专属用户代码",
    prof_sports: "感兴趣的运动",
    prof_phone: "联系电话",
    prof_location_consent: "实时位置共享状态",
    manage_privacy: "管理隐私偏好与授权",
    infosec_title: "信息安全与区域法规合规",
    infosec_sub: "严格执行GDPR、各区域个人信息保护法等合规标准",
    modal_all_sports_title: "全部体育项目库",
    modal_all_sports_desc: "选择要在顶部栏展示或筛选的运动类别。",
    invite_modal_title: "邀请好友加入",
    modal_consent_title: "欢迎使用 Challenge - Sports clubz",
    modal_select_lang: "选择语言:",
    modal_consent_intro: "为了提供实时运动匹配、排名计算和位置寻找功能，请确认以下条款:",
    consent_terms: "[必选] 同意服务条款与全球信息安全政策 (GDPR/法规)",
    consent_loc: "[必选] 同意为实时搭档发现共享GPS地理位置",
    consent_match: "[必选] 同意比赛成绩双向确认与真实性制度",
    btn_agree_continue: "同意并进入应用",
    modal_new_challenge: "创建正式挑战",
    challenge_type: "挑战类型:",
    form_sport: "运动类别 (需与对手一致):",
    form_target: "对手或目标俱乐部:",
    form_date_loc: "比赛时间与地点:",
    form_rule_notice: "仅允许挑战高出自身2~3位的对手，双方同意后方可录入积分。",
    checkout_title: "安全收银台",
    choose_payment_method: "选择支付方式:"
  },
  "zh-TW": {
    tagline: "為所有人打造的全方位運動社群 App",
    top_my_sports: "我的關注運動:",
    btn_manage_sports: "全運動項目庫",
    nearest_session_alert: "最近活動日程:",
    ai_random_partner: "隨機隊友",
    ai_random_sport: "推薦運動",
    ai_travel_club: "遠征俱樂部",
    nav_discover: "探索與即時地圖",
    nav_calendar: "俱樂部活動日曆",
    nav_challenge: "挑戰天梯系統",
    nav_rankings: "官方排名",
    nav_clubs: "俱樂部與隊伍",
    nav_payments: "安全支付",
    nav_profile: "個人檔案與安全",
    cta_challenge: "發起挑戰",
    map_title: "即時俱樂部與球友尋找地圖",
    map_subtitle: "在地圖上即時查看註冊俱樂部、尋求對戰的個人與官方比賽。",
    filter_clubs: "俱樂部",
    filter_partners: "即時球友",
    filter_tournaments: "競賽賽事",
    all_sports: "所有運動",
    selected_location_info: "選取詳細資訊",
    click_marker_prompt: "點擊地圖標記或列表中的俱樂部即可查看詳情並報名參與。",
    btn_ping_partner: "傳送呼叫 (Ping) 邀約",
    btn_participate_club: "參與俱樂部活動",
    btn_challenge_now: "送出挑戰邀請",
    map_broadcast_status: "GPS位置廣播: 啟用中 (已同意)",
    discover_chat_title: "即時探索聊天與球友呼叫機制",
    discover_chat_desc: "呼叫同意啟用機制、群組約戰與俱樂部專屬討論室",
    tab_partner_chat: "球友呼叫/聊天",
    tab_clubrooms: "俱樂部專區",
    btn_invite_member: "邀請成員",
    btn_group_chat: "建立群聊",
    cal_badge: "就近俱樂部固定日程",
    cal_title: "附近俱樂部日程與應繳費用",
    cal_desc: "查看鄰近俱樂部的固定活動、租場費與會員費用，並支援線上繳費。",
    filter_sport_label: "項目篩選:",
    challenge_hub_title: "天梯挑戰與雙方同意賽果記錄系統",
    challenge_rules_desc: "排名較低者僅可向上挑戰高於自身2~3名的選手。僅限同運動項目對戰，新玩家起始排名為999，雙方核可賽果後更新排位！",
    btn_start_challenge: "發起挑戰",
    individual_challenge: "個人挑戰 (高於自身2~3名)",
    club_challenge: "俱樂部對抗賽",
    my_current_sport: "目前運動:",
    my_rank_status: "您的排名: 第5名 (可挑戰目標: 第2名, 第3名)",
    col_player: "選手 / 使用者",
    col_region: "地區",
    col_sport: "運動項目",
    col_record: "勝率 / 場次",
    col_eligibility: "挑戰資格",
    col_action: "操作",
    match_consent_title: "賽果雙方核可與待審核清單",
    match_consent_desc: "雙方皆確認比分後，系統方會正式記錄並更新積分。",
    ranking_header: "官方排名與榮譽榜",
    ranking_sub: "按運動種類與地區（城市、縣市、全國、全球）篩選",
    rank_personal: "個人榜",
    rank_club: "俱樂部榜",
    col_name: "姓名 / 俱樂部",
    col_score: "積分",
    col_tier: "段位等級",
    clubs_header: "運動俱樂部與戰隊目錄",
    clubs_sub: "探索活躍的運動俱樂部，參加定期約戰，或建立專屬俱樂部。",
    btn_register_club: "註冊新俱樂部",
    payments_title: "整合式運動支付系統",
    payments_desc: "安全繳納俱樂部月費、隊伍租場費與賽事報名費用。",
    payable_items: "待繳項目與賽事報名",
    pay_now: "立即繳費",
    transaction_history: "近期交易收據",
    supported_gateways: "支援的支付管道",
    gateway_desc: "符合國際資安標準與金融法規，提供第三方信託代管保障。",
    prof_code: "專屬會員代號",
    prof_sports: "感興趣運動",
    prof_phone: "聯絡電話",
    prof_location_consent: "即時定位分享狀態",
    manage_privacy: "隱私與授權設定",
    infosec_title: "資訊安全與區域合規規範",
    infosec_sub: "落實GDPR與各國個人資料保護法規，確保隱私安全",
    modal_all_sports_title: "全運動項目庫",
    modal_all_sports_desc: "選擇要顯示或篩選的運動類別。",
    invite_modal_title: "成員邀請",
    modal_consent_title: "歡迎使用 Challenge - Sports clubz",
    modal_select_lang: "選擇語言:",
    modal_consent_intro: "為提供即時運動配對、積分計算與定位搜尋，請同意以下條款:",
    consent_terms: "[必選] 同意服務條款與全球資安政策",
    consent_loc: "[必選] 同意為即時地圖尋友分享GPS定位資訊",
    consent_match: "[必選] 同意賽果雙向核可機制",
    btn_agree_continue: "確認並開始使用",
    modal_new_challenge: "建立正式挑戰賽",
    challenge_type: "挑戰類別:",
    form_sport: "運動項目 (須與對手相同):",
    form_target: "對戰選手或俱樂部:",
    form_date_loc: "日期與比賽場地:",
    form_rule_notice: "僅可挑戰排名高出2~3位的選手，雙方同意後計入排名。",
    checkout_title: "安全收銀台",
    choose_payment_method: "選擇付款方式:"
  },
  fr: {
    tagline: "Application communautaire de sport pour tous et tous les sports",
    top_my_sports: "Mes sports:",
    btn_manage_sports: "Tous les sports",
    nearest_session_alert: "Session la plus proche:",
    ai_random_partner: "Partenaire",
    ai_random_sport: "Sport aléatoire",
    ai_travel_club: "Club voyage",
    nav_discover: "Découvrir & Carte Live",
    nav_calendar: "Calendrier des Clubs",
    nav_challenge: "Système de Défi",
    nav_rankings: "Classements",
    nav_clubs: "Clubs & Équipes",
    nav_payments: "Paiements",
    nav_profile: "Profil & Sécurité",
    cta_challenge: "Lancer Défi",
    map_title: "Découverte en temps réel & Carte Interactive",
    map_subtitle: "Trouvez des clubs de sport enregistrés, des partenaires pour des matchs immédiats et des compétitions.",
    filter_clubs: "Clubs",
    filter_partners: "Partenaires (Live)",
    filter_tournaments: "Compétitions",
    all_sports: "Tous les sports",
    selected_location_info: "Détails de la sélection",
    click_marker_prompt: "Cliquez sur un repère ou un club pour voir les détails et participer.",
    btn_ping_partner: "Envoyer un Ping Partenaire",
    btn_participate_club: "Rejoindre la session",
    btn_challenge_now: "Envoyer un défi officiel",
    map_broadcast_status: "Position GPS: Diffusée (Consentement actif)",
    discover_chat_title: "Chat en direct & Système de Ping",
    discover_chat_desc: "File des partenaires, validation mutuelle du ping, chat de groupe et salons de club.",
    tab_partner_chat: "Pings Partenaires",
    tab_clubrooms: "Salons de Club",
    btn_invite_member: "Inviter un membre",
    btn_group_chat: "Créer un groupe",
    cal_badge: "Séances des clubs proches",
    cal_title: "Calendrier des séances & Paiements requis",
    cal_desc: "Consultez les entraînements réguliers les plus proches avec détails des cotisations et réservation instantanée.",
    filter_sport_label: "Filtrer par sport:",
    challenge_hub_title: "Défis Compétitifs & Validation Mutuelle des Résultats",
    challenge_rules_desc: "Les joueurs de rang inférieur peuvent défier des adversaires situés 2 à 3 rangs au-dessus. Même catégorie sportive obligatoire. Rang initial: 999.",
    btn_start_challenge: "Lancer un Défi",
    individual_challenge: "Défi Individuel (2~3 rangs au-dessus)",
    club_challenge: "Défi Club contre Club",
    my_current_sport: "Sport actuel:",
    my_rank_status: "Votre Rang: #5 (Cibles éligibles: #2, #3)",
    col_player: "Joueur / Utilisateur",
    col_region: "Région",
    col_sport: "Sport",
    col_record: "Victoires / Matchs",
    col_eligibility: "Éligibilité",
    col_action: "Action",
    match_consent_title: "File d'attente d'approbation des résultats",
    match_consent_desc: "Les deux parties doivent confirmer le score pour que le classement officiel soit mis à jour.",
    ranking_header: "Classements & Tableaux d'Honneur",
    ranking_sub: "Filtré par sport et par région (Ville, Régional, National, Mondial)",
    rank_personal: "Individuel",
    rank_club: "Club",
    col_name: "Nom / Club",
    col_score: "Points",
    col_tier: "Niveau / Échelon",
    clubs_header: "Annuaire des Clubs & Équipes",
    clubs_sub: "Découvrez les clubs sportifs actifs et rejoignez des entraînements réguliers.",
    btn_register_club: "Inscrire un nouveau club",
    payments_title: "Système de Paiement Sportif Unifié",
    payments_desc: "Gérez en toute sécurité les cotisations de club et frais d'inscription aux tournois.",
    payable_items: "Cotisations & Inscriptions",
    pay_now: "Payer maintenant",
    transaction_history: "Reçus récents",
    supported_gateways: "Moyens de paiement acceptés",
    gateway_desc: "Conforme PCI-DSS, RGPD européen et réglementation bancaire locale.",
    prof_code: "Code Utilisateur Unique",
    prof_sports: "Sports d'intérêt",
    prof_phone: "Téléphone",
    prof_location_consent: "Partage de position en direct",
    manage_privacy: "Gérer le consentement & confidentialité",
    infosec_title: "Sécurité de l'Information & Conformité Régionale",
    infosec_sub: "Normes mondiales (RGPD, ISO 27001) et lois locales de protection des données.",
    modal_all_sports_title: "Répertoire de tous les sports",
    modal_all_sports_desc: "Sélectionnez les catégories à afficher dans votre profil.",
    invite_modal_title: "Options d'invitation",
    modal_consent_title: "Bienvenue sur Challenge - Sports clubz",
    modal_select_lang: "Choisissez votre langue:",
    modal_consent_intro: "Veuillez accepter les conditions requises pour activer la carte et les défis:",
    consent_terms: "[Requis] Accepter les Conditions & Politique RGPD",
    consent_loc: "[Requis] Partage GPS pour la carte en direct et recherche de partenaires",
    consent_match: "[Requis] Système de double consentement pour la validation des scores",
    btn_agree_continue: "Confirmer et entrer",
    modal_new_challenge: "Créer un défi officiel",
    challenge_type: "Type de défi:",
    form_sport: "Sport (identique à l'adversaire):",
    form_target: "Adversaire ou club:",
    form_date_loc: "Date et lieu:",
    form_rule_notice: "Seuls les défis contre des adversaires de 2 à 3 rangs supérieurs sont autorisés.",
    checkout_title: "Paiement Sécurisé",
    choose_payment_method: "Mode de paiement:"
  },
  de: {
    tagline: "Sport-Community-App für jeden Sportler und alle Sportarten",
    top_my_sports: "Meine Sportarten:",
    btn_manage_sports: "Alle Sportarten",
    nearest_session_alert: "Nächste Trainingseinheit:",
    ai_random_partner: "Partner",
    ai_random_sport: "Zufallssport",
    ai_travel_club: "Reise-Club",
    nav_discover: "Entdecken & Live-Karte",
    nav_calendar: "Vereinskalender",
    nav_challenge: "Herausforderungssystem",
    nav_rankings: "Ranglisten",
    nav_clubs: "Vereine & Teams",
    nav_payments: "Zahlungssystem",
    nav_profile: "Profil & Sicherheit",
    cta_challenge: "Herausforderung",
    map_title: "Echtzeit-Standortsuche & Vorschau",
    map_subtitle: "Finden Sie registrierte Sportvereine, lokale Spielpartner und Turniere.",
    filter_clubs: "Vereine",
    filter_partners: "Partner (Live)",
    filter_tournaments: "Turniere",
    all_sports: "Alle Sportarten",
    selected_location_info: "Ausgewählte Details",
    click_marker_prompt: "Klicken Sie auf eine Markierung, um Details zu sehen und teilzunehmen.",
    btn_ping_partner: "Partner anpingen",
    btn_participate_club: "Am Training teilnehmen",
    btn_challenge_now: "Offizielle Herausforderung",
    map_broadcast_status: "GPS-Standortfreigabe: Aktiv (Zustimmung erteilt)",
    discover_chat_title: "Live-Chat & Ping-System",
    discover_chat_desc: "Partner-Warteschlange, Ping-Freischaltung, Gruppenchat und Vereinskanäle.",
    tab_partner_chat: "Partner-Pings",
    tab_clubrooms: "Vereins-Chatrooms",
    btn_invite_member: "Mitglied einladen",
    btn_group_chat: "Gruppenchat starten",
    cal_badge: "Nächste Vereinstermine",
    cal_title: "Nahegelegene Vereinstermine & Zahlungsdetails",
    cal_desc: "Durchsuchen Sie Trainingseinheiten in Ihrer Nähe mit Beitragsangaben und Sofortbuchung.",
    filter_sport_label: "Sportart filtern:",
    challenge_hub_title: "Wettkampf-Herausforderungen & Beidseitige Spielergebniserfassung",
    challenge_rules_desc: "Niedriger platzierte Spieler können nur Gegner fordern, die 2 bis 3 Ränge über ihnen liegen. Gleiche Sportart erforderlich. Startrang: 999.",
    btn_start_challenge: "Herausforderung starten",
    individual_challenge: "Einzel (2~3 Ränge höher)",
    club_challenge: "Vereinsduell",
    my_current_sport: "Aktuelle Sportart:",
    my_rank_status: "Ihr Rang: #5 (Mögliche Gegner: #2, #3)",
    col_player: "Spieler / Benutzer",
    col_region: "Region",
    col_sport: "Sportart",
    col_record: "Siege / Spiele",
    col_eligibility: "Berechtigung",
    col_action: "Aktion",
    match_consent_title: "Warteschlange für beiderseitige Ergebnisbestätigung",
    match_consent_desc: "Beide Parteien müssen dem Ergebnis zustimmen, bevor die Rangliste aktualisiert wird.",
    ranking_header: "Offizielle Ranglisten",
    ranking_sub: "Gefiltert nach Sportart und Region (Stadt, Regional, National, Global)",
    rank_personal: "Einzelrangliste",
    rank_club: "Vereinsrangliste",
    col_name: "Name / Verein",
    col_score: "Punkte",
    col_tier: "Stufe / Rang",
    clubs_header: "Verzeichnis der Sportvereine & Teams",
    clubs_sub: "Finden Sie aktive Vereine und nehmen Sie an regulären Trainings teil.",
    btn_register_club: "Neuen Verein eintragen",
    payments_title: "Integriertes Sport-Zahlungssystem",
    payments_desc: "Vereinsbeiträge, Hallengebühren und Turnierstartgelder sicher verwalten.",
    payable_items: "Offene Beiträge & Turniere",
    pay_now: "Jetzt bezahlen",
    transaction_history: "Zahlungsbelege",
    supported_gateways: "Unterstützte Zahlungsarten",
    gateway_desc: "Entspricht PCI-DSS, DSGVO und regionalen Sicherheitsstandards.",
    prof_code: "Eindeutiger Benutzercode",
    prof_sports: "Interessierte Sportarten",
    prof_phone: "Kontakt",
    prof_location_consent: "Live-Standortfreigabe",
    manage_privacy: "Datenschutz- & Zustimmungseinstellungen",
    infosec_title: "Informationssicherheit & Regionale Compliance",
    infosec_sub: "Strenge Einhaltung von DSGVO, ISO 27001 und regionalen Datenschutzgesetzen.",
    modal_all_sports_title: "Verzeichnis aller Sportarten",
    modal_all_sports_desc: "Wählen Sie Sportarten zur Anzeige in der oberen Leiste aus.",
    invite_modal_title: "Einladungsoptionen",
    modal_consent_title: "Willkommen bei Challenge - Sports clubz",
    modal_select_lang: "Sprache wählen:",
    modal_consent_intro: "Bitte bestätigen Sie die Nutzungsbedingungen für die Standortermittlung:",
    consent_terms: "[Erforderlich] Zustimmung zu Nutzungsbedingungen & DSGVO-Richtlinien",
    consent_loc: "[Erforderlich] Zustimmung zur GPS-Standortfreigabe für die Live-Suche",
    consent_match: "[Erforderlich] Zustimmung zum beiderseitigen Bestätigungssystem für Match-Ergebnisse",
    btn_agree_continue: "Bestätigen und Starten",
    modal_new_challenge: "Offizielle Herausforderung erstellen",
    challenge_type: "Art der Herausforderung:",
    form_sport: "Sportart (muss übereinstimmen):",
    form_target: "Gegner oder Verein:",
    form_date_loc: "Datum & Spielort:",
    form_rule_notice: "Nur Herausforderungen 2-3 Plätze über Ihrem Rang sind für die Rangliste gültig.",
    checkout_title: "Sichere Kasse",
    choose_payment_method: "Zahlungsart wählen:"
  }
};

let currentLang = 'en';

// 2. Comprehensive Sport Categories Catalog (Requirement 18)
const allSportCategories = [
  {
    group: "Water & Ocean Sports (수상 및 해양)",
    sports: [
      { name: "프리다이빙", labelEn: "Freediving", icon: "fa-water" },
      { name: "스쿠버다이빙", labelEn: "Scuba Diving", icon: "fa-mask-snorkel" },
      { name: "수중하키", labelEn: "Underwater Hockey", icon: "fa-hockey-puck" },
      { name: "수중럭비", labelEn: "Underwater Rugby", icon: "fa-shield" },
      { name: "수영", labelEn: "Swimming", icon: "fa-person-swimming" },
      { name: "서핑", labelEn: "Surfing", icon: "fa-water" }
    ]
  },
  {
    group: "Climbing & Mountain (클라이밍 및 아웃도어)",
    sports: [
      { name: "클라이밍", labelEn: "Climbing", icon: "fa-mountain" },
      { name: "볼더링", labelEn: "Bouldering", icon: "fa-mountain-city" },
      { name: "리드클라이밍", labelEn: "Lead Climbing", icon: "fa-arrows-split-up-and-left" },
      { name: "트레일러닝", labelEn: "Trail Running", icon: "fa-person-running" },
      { name: "등산", labelEn: "Hiking", icon: "fa-person-hiking" }
    ]
  },
  {
    group: "Racket Sports (라켓 종목)",
    sports: [
      { name: "배드민턴", labelEn: "Badminton", icon: "fa-table-tennis-paddle-ball" },
      { name: "테니스", labelEn: "Tennis", icon: "fa-baseball" },
      { name: "탁구", labelEn: "Table Tennis", icon: "fa-table-tennis-paddle-ball" },
      { name: "스쿼시", labelEn: "Squash", icon: "fa-circle-dot" },
      { name: "피클볼", labelEn: "Pickleball", icon: "fa-bowling-ball" }
    ]
  },
  {
    group: "Ball & Team Sports (구기 및 팀 스포츠)",
    sports: [
      { name: "축구", labelEn: "Football / Soccer", icon: "fa-futbol" },
      { name: "풋살", labelEn: "Futsal", icon: "fa-futbol" },
      { name: "농구", labelEn: "Basketball", icon: "fa-basketball" },
      { name: "배구", labelEn: "Volleyball", icon: "fa-volleyball" },
      { name: "야구", labelEn: "Baseball", icon: "fa-baseball-bat-ball" }
    ]
  },
  {
    group: "Martial Arts & Fitness (격투기 및 피트니스)",
    sports: [
      { name: "복싱", labelEn: "Boxing", icon: "fa-hand-fist" },
      { name: "주짓수", labelEn: "Brazilian Jiu-Jitsu", icon: "fa-user-ninja" },
      { name: "태권도", labelEn: "Taekwondo", icon: "fa-medal" },
      { name: "크로스핏", labelEn: "CrossFit", icon: "fa-dumbbell" },
      { name: "필라테스/요가", labelEn: "Pilates / Yoga", icon: "fa-spa" },
      { name: "골프", labelEn: "Golf", icon: "fa-golf-ball-tee" },
      { name: "러닝", labelEn: "Running", icon: "fa-person-running" }
    ]
  }
];

// 3. Central Database Model
const DB = {
  currentUser: {
    code: "USR-7729-KR",
    name: "Edcat",
    region: "서울 동대문구 (Dongdaemun, Seoul)",
    // Selected sports categories shown on top
    selectedSports: ["클라이밍", "프리다이빙", "수중하키", "수중럭비", "탁구"],
    matches: 2,
    score: 20,
    rank: 5, // Rank in Climbing
    level: "Silver",
    phone: "010-XXXX-5521",
    locationConsent: true,
    lat: 37.5744,
    lng: 127.0397
  },

  // Clubs with distance calculation from user's Seoul location (37.5744, 127.0397)
  clubs: [
    {
      id: "CLUB-001",
      name: "샘플 강남 배드민턴",
      country: "한국",
      city: "서울",
      region: "서울 강남구",
      sport1: "배드민턴",
      sport2: "테니스",
      reqLevel: "건강한 남녀누구나",
      description: "양재 배드민턴 전용 구장 정기 레슨 및 월례 대회 클럽",
      schedule: "매주 화/목 저녁 19:00 - 22:00",
      contact: "010-0000-0000",
      address: "서울 강남구 양재 배드민턴전용체육관",
      lat: 37.4842,
      lng: 127.0345,
      memberCount: 42,
      monthlyFee: 25000,
      sessionCourtFee: 15000,
      distanceKm: 8.5
    },
    {
      id: "CLUB-002",
      name: "샘플 해운대 스매시",
      country: "한국",
      city: "부산",
      region: "부산 해운대",
      sport1: "테니스",
      sport2: "배드민턴",
      reqLevel: "제한 없음 (초보자 환영)",
      description: "해운대 올림픽공원 테니스 코트 주말 클럽",
      schedule: "매주 토/일 아침 07:00 - 10:00",
      contact: "open.kakao.com/tennis_haeundae",
      address: "부산 해운대구 우동 올림픽공원 테니스장",
      lat: 35.1631,
      lng: 129.1636,
      memberCount: 35,
      monthlyFee: 30000,
      sessionCourtFee: 20000,
      distanceKm: 325.0
    },
    {
      id: "CLUB-003",
      name: "범고래수중하키",
      country: "한국",
      city: "성남",
      region: "경기 성남",
      sport1: "수중하키",
      sport2: "수중럭비",
      reqLevel: "제한 없음 (장비 대여 가능)",
      description: "국내 최정상 수중하키 클럽, 성남종합운동장 다이빙풀 세션",
      schedule: "매주 토요일 11:30 - 14:30",
      contact: "010-4455-8899",
      address: "경기 성남시 중원구 성남종합운동장 다이빙풀",
      lat: 37.4385,
      lng: 127.1378,
      memberCount: 28,
      monthlyFee: 35000,
      sessionCourtFee: 25000,
      distanceKm: 14.2
    },
    {
      id: "CLUB-004",
      name: "샘플 청량리조기축구",
      country: "한국",
      city: "서울",
      region: "서울 동대문구",
      sport1: "축구",
      sport2: "풋살",
      reqLevel: "실력 무관 열정 있는 분",
      description: "동대문구 청량리 및 배봉산 인조잔디구장 주말 조기축구",
      schedule: "매주 일요일 오전 06:00 - 09:00",
      contact: "010-8877-2233",
      address: "서울 동대문구 청량리동 체육공원",
      lat: 37.5801,
      lng: 127.0450,
      memberCount: 50,
      monthlyFee: 15000,
      sessionCourtFee: 10000,
      distanceKm: 1.2
    },
    {
      id: "CLUB-005",
      name: "딥블루 프리다이빙 (Deep Blue Freediving)",
      country: "한국",
      city: "서울",
      region: "서울 송파구",
      sport1: "프리다이빙",
      sport2: "스쿠버다이빙",
      reqLevel: "AIDA 1 이상 또는 초보 환영",
      description: "올림픽공원 수영장 다이빙풀 정기 트레이닝 및 해양 K-26 정기 투어",
      schedule: "매주 토요일 10:00 - 13:00",
      contact: "010-3344-5566",
      address: "서울 송파구 올림픽로 424 올림픽수영장 다이빙풀",
      lat: 37.5188,
      lng: 127.1246,
      memberCount: 64,
      monthlyFee: 40000,
      sessionCourtFee: 30000,
      distanceKm: 8.9
    },
    {
      id: "CLUB-006",
      name: "제주 블루홀 다이버스 (Jeju Bluehole Divers)",
      country: "한국",
      city: "제주",
      region: "제주 서귀포",
      sport1: "프리다이빙",
      sport2: "해양스포츠",
      reqLevel: "레벨 무관 (체험 다이빙 가능)",
      description: "서귀포 문섬, 범섬 보팅 및 해양 딥다이빙 전문 동호회",
      schedule: "매주 일요일 상시 해양 세션",
      contact: "010-7788-9900",
      address: "제주 서귀포시 남성중로 40 서귀포잠수함 인근 다이빙센터",
      lat: 33.2428,
      lng: 126.5594,
      memberCount: 38,
      monthlyFee: 45000,
      sessionCourtFee: 40000,
      distanceKm: 480.0
    },
    {
      id: "CLUB-007",
      name: "더 클라임 볼더스 (The Climb Boulders)",
      country: "한국",
      city: "서울",
      region: "서울 마포구",
      sport1: "클라이밍",
      sport2: "볼더링",
      reqLevel: "제한 없음 (V0~V8)",
      description: "홍대/마포 거점 볼더링 정기 원정 및 주간 볼더링 파티 세션",
      schedule: "매주 수/금 저녁 19:30 - 22:00",
      contact: "010-1234-8899",
      address: "서울 마포구 양화로 125 더클라임 홍대점",
      lat: 37.5545,
      lng: 126.9218,
      memberCount: 88,
      monthlyFee: 20000,
      sessionCourtFee: 18000,
      distanceKm: 6.8
    },
    {
      id: "CLUB-008",
      name: "피크 헌터스 클라이밍 (Peak Hunters Climbing)",
      country: "한국",
      city: "서울",
      region: "서울 강북구",
      sport1: "클라이밍",
      sport2: "리드클라이밍",
      reqLevel: "5.10a 이상 또는 기초 이수자",
      description: "북한산 인수봉/선인봉 자연 바위 및 실내 리드 클라이밍 동호회",
      schedule: "매월 둘째, 넷째 주말 야외 등반 09:00 - 15:00",
      contact: "010-9988-1122",
      address: "서울 강북구 우이동 북한산 둘레길 등반센터",
      lat: 37.6625,
      lng: 127.0125,
      memberCount: 45,
      monthlyFee: 25000,
      sessionCourtFee: 20000,
      distanceKm: 8.2
    }
  ],

  // Upcoming scheduled sessions for Nearest Clubs Calendar (Requirement 19)
  scheduledSessions: [
    {
      id: "SESS-001",
      clubName: "더 클라임 볼더스",
      sport: "클라이밍",
      date: "2026-09-23", // Today!
      time: "19:30 - 22:00",
      venue: "더클라임 홍대점 (Mapo)",
      distance: "6.8 km away (Nearest)",
      requiredPayment: {
        item: "Guest Day Pass + Chalk Share",
        amount: 18000,
        currency: "KRW"
      },
      capacity: "18 / 25 spots filled",
      host: "송태섭 (Crew Captain)"
    },
    {
      id: "SESS-002",
      clubName: "샘플 청량리조기축구",
      sport: "축구",
      date: "2026-09-27", // Coming Sunday
      time: "06:00 - 09:00",
      venue: "청량리동 배봉산 인조잔디구장",
      distance: "1.2 km away (Closest)",
      requiredPayment: {
        item: "Turf Court Rental Share",
        amount: 10000,
        currency: "KRW"
      },
      capacity: "22 / 30 spots filled",
      host: "박회장 (Team Manager)"
    },
    {
      id: "SESS-003",
      clubName: "딥블루 프리다이빙",
      sport: "프리다이빙",
      date: "2026-09-26", // Saturday
      time: "10:00 - 13:00",
      venue: "서울 올림픽수영장 다이빙풀 5M",
      distance: "8.9 km away",
      requiredPayment: {
        item: "Pool Entrance + Lane Reservation",
        amount: 30000,
        currency: "KRW"
      },
      capacity: "12 / 15 spots filled",
      host: "최강사 (Master Instructor)"
    },
    {
      id: "SESS-004",
      clubName: "피크 헌터스 클라이밍",
      sport: "클라이밍",
      date: "2026-09-27",
      time: "09:00 - 14:00",
      venue: "북한산 인수봉 자연암벽 하강/등반",
      distance: "8.2 km away",
      requiredPayment: {
        item: "Common Gear Maintenance & Insurance",
        amount: 20000,
        currency: "KRW"
      },
      capacity: "8 / 10 spots filled",
      host: "김산악 (Lead Climber)"
    },
    {
      id: "SESS-005",
      clubName: "샘플 강남 배드민턴",
      sport: "배드민턴",
      date: "2026-09-24", // Thursday
      time: "19:00 - 22:00",
      venue: "양재 배드민턴 전용구장 3번 코트",
      distance: "8.5 km away",
      requiredPayment: {
        item: "Court Rental & Shuttlecocks",
        amount: 15000,
        currency: "KRW"
      },
      capacity: "14 / 16 spots filled",
      host: "김철수 (Gangnam Captain)"
    },
    {
      id: "SESS-006",
      clubName: "범고래수중하키",
      sport: "수중하키",
      date: "2026-09-26",
      time: "11:30 - 14:30",
      venue: "성남종합운동장 다이빙풀",
      distance: "14.2 km away",
      requiredPayment: {
        item: "Pool Charter & Puck Gear Share",
        amount: 25000,
        currency: "KRW"
      },
      capacity: "16 / 20 spots filled",
      host: "Edcat & 범고래 매니저"
    }
  ],

  // Live Partners with Ping status & Chat state (Requirement 20)
  livePartners: [
    {
      id: "LP-01",
      name: "Alex V. (Freediver)",
      sport: "프리다이빙",
      rank: 3,
      lat: 37.5140,
      lng: 127.1000,
      status: "Looking for buddy at Olympic pool",
      distance: "Olympic Pool (8.5km)",
      pingStatus: "accepted", // 'none', 'pending', 'accepted'
      isSelectedForChat: true,
      messages: [
        { sender: "Alex V.", time: "14:10", text: "Hey Edcat! Saw you're into freediving & climbing too." },
        { sender: "Edcat", time: "14:15", text: "Hi Alex! Yes, planning to hit Olympic pool this Saturday." },
        { sender: "Alex V.", time: "14:18", text: "Awesome, let's buddy up for STA & DYN heats!" }
      ]
    },
    {
      id: "LP-02",
      name: "박지원 (Climber)",
      sport: "클라이밍",
      rank: 2,
      lat: 37.5580,
      lng: 126.9250,
      status: "Bouldering session at Hongdae",
      distance: "Hongdae (6.8km)",
      pingStatus: "pending", // Waiting for acceptance
      isSelectedForChat: true,
      messages: []
    },
    {
      id: "LP-03",
      name: "김철수 (Kim Chul-soo)",
      sport: "배드민턴",
      rank: 2,
      lat: 37.4979,
      lng: 127.0276,
      status: "Looking for 1:1 match right now!",
      distance: "Gangnam (8.2km)",
      pingStatus: "none",
      isSelectedForChat: true,
      messages: []
    },
    {
      id: "LP-04",
      name: "이영희 (Lee Young-hee)",
      sport: "테니스",
      rank: 4,
      lat: 35.1587,
      lng: 129.1603,
      status: "Looking for tennis rally partner in Busan",
      distance: "Busan Marine City",
      pingStatus: "none",
      isSelectedForChat: false,
      messages: []
    }
  ],

  // Dedicated Club Chatrooms (Requirement 20)
  clubRooms: [
    {
      id: "ROOM-CLIMB",
      clubName: "더 클라임 볼더스 (Crew Room)",
      sport: "클라이밍",
      membersCount: 88,
      messages: [
        { sender: "송태섭", time: "11:20", text: "Today's new set at Hongdae: V4 purple tape and V6 red tape are tricky!" },
        { sender: "강백호", time: "11:45", text: "I flashed the V4! Who's joining the 19:30 session?" },
        { sender: "서태웅", time: "12:02", text: "I'll be there by 19:15." }
      ]
    },
    {
      id: "ROOM-FREE",
      clubName: "딥블루 프리다이빙 (Official Room)",
      sport: "프리다이빙",
      membersCount: 64,
      messages: [
        { sender: "최강사", time: "Yesterday", text: "Saturday morning lane 3 and 4 reserved. Please bring safety lanyards." },
        { sender: "Alex V.", time: "09:30", text: "Confirmed! Bringing a guest buddy." }
      ]
    },
    {
      id: "ROOM-HOCKEY",
      clubName: "범고래수중하키 (Team Room)",
      sport: "수중하키",
      membersCount: 28,
      messages: [
        { sender: "범고래 매니저", time: "Sep 21", text: "Puck and stick gear sets inspected. Ready for Saturday scrimmage." }
      ]
    }
  ],

  // Competitions
  competitions: [
    {
      id: "COMP-01",
      title: "2026 Seoul Metro Freediving Cup",
      sport: "프리다이빙",
      date: "2026-10-15",
      venue: "서울 올림픽수영장",
      lat: 37.5188,
      lng: 127.1246,
      prize: "₩ 5,000,000 + Official Medal"
    },
    {
      id: "COMP-02",
      title: "National Bouldering Masters Fall 2026",
      sport: "클라이밍",
      date: "2026-11-02",
      venue: "더클라임 일산/마포",
      lat: 37.5545,
      lng: 126.9218,
      prize: "₩ 3,000,000"
    }
  ],

  // Rankings Database
  rankings: [
    { rank: 1, name: "강백호", entityType: "personal", sport: "클라이밍", region: "서울 마포구", score: 1850, level: "Master", matches: "45W / 52M" },
    { rank: 2, name: "박지원", entityType: "personal", sport: "클라이밍", region: "서울 서대문구", score: 1420, level: "Diamond", matches: "32W / 38M" },
    { rank: 3, name: "송태섭", entityType: "personal", sport: "클라이밍", region: "서울 마포구", score: 1200, level: "Platinum", matches: "28W / 35M" },
    { rank: 4, name: "서태웅", entityType: "personal", sport: "클라이밍", region: "서울 강남구", score: 980, level: "Gold", matches: "20W / 26M" },
    { rank: 5, name: "Edcat (You)", entityType: "personal", sport: "클라이밍", region: "서울 동대문구", score: 20, level: "Silver", matches: "2W / 2M" },
    { rank: 6, name: "정대만", entityType: "personal", sport: "클라이밍", region: "경기 성남", score: 720, level: "Silver", matches: "15W / 22M" },
    { rank: 999, name: "신규참가자 (Rookie A)", entityType: "personal", sport: "클라이밍", region: "서울 용산구", score: 0, level: "Unranked (999)", matches: "0W / 0M" },

    // Freediving
    { rank: 1, name: "최다이브", entityType: "personal", sport: "프리다이빙", region: "제주 서귀포", score: 2100, level: "Master", matches: "50W / 55M" },
    { rank: 2, name: "김철수", entityType: "personal", sport: "프리다이빙", region: "서울 강남구", score: 1650, level: "Diamond", matches: "35W / 40M" },
    { rank: 3, name: "Alex V.", entityType: "personal", sport: "프리다이빙", region: "서울 송파구", score: 1390, level: "Platinum", matches: "25W / 30M" },
    { rank: 4, name: "장해양", entityType: "personal", sport: "프리다이빙", region: "부산 해운대", score: 1100, level: "Gold", matches: "18W / 24M" },
    { rank: 999, name: "바다의꿈 (Rookie B)", entityType: "personal", sport: "프리다이빙", region: "인천 연수구", score: 0, level: "Unranked (999)", matches: "0W / 0M" },

    // Clubs
    { rank: 1, name: "더 클라임 볼더스", entityType: "club", sport: "클라이밍", region: "서울 마포구", score: 4850, level: "GrandMaster", matches: "88W / 102M" },
    { rank: 2, name: "피크 헌터스 클라이밍", entityType: "club", sport: "클라이밍", region: "서울 강북구", score: 3950, level: "Master", matches: "65W / 78M" },
    { rank: 3, name: "딥블루 프리다이빙", entityType: "club", sport: "프리다이빙", region: "서울 송파구", score: 3600, level: "Master", matches: "55W / 65M" },
    { rank: 4, name: "제주 블루홀 다이버스", entityType: "club", sport: "프리다이빙", region: "제주 서귀포", score: 3200, level: "Diamond", matches: "48W / 60M" },
    { rank: 5, name: "범고래수중하키", entityType: "club", sport: "수중하키", region: "경기 성남", score: 2900, level: "Platinum", matches: "40W / 52M" },
    { rank: 6, name: "샘플 강남 배드민턴", entityType: "club", sport: "배드민턴", region: "서울 강남구", score: 2500, level: "Gold", matches: "36W / 50M" }
  ],

  // Dual Consent Queue
  pendingConsents: [
    {
      id: "REC-2026-0922",
      competition: "Seoul Metro Bouldering 1:1 Challenge",
      date: "2026-09-22",
      sport: "클라이밍",
      wonPlayer: "Edcat",
      lostPlayer: "서태웅",
      scoreResult: "V5 FLASH : V5 3-ATTS",
      pointsProposed: "+15 Pts",
      consentStatus: "Waiting for Opponent (서태웅) Consent",
      canIApprove: false
    },
    {
      id: "REC-2026-0919",
      competition: "Friendly Underground Underwater Hockey Duel",
      date: "2026-09-19",
      sport: "수중하키",
      wonPlayer: "범고래수중하키",
      lostPlayer: "서울 해마 클럽",
      scoreResult: "4 : 2",
      pointsProposed: "+10 Pts",
      consentStatus: "Pending Your Club's Consent",
      canIApprove: true
    }
  ]
};

// UI & Chat States
let mapInstance = null;
let mapMarkers = [];
let currentSelectedEntity = null;
let currentChallengeMode = 'individual';
let currentRankType = 'personal';
let currentChatChannel = 'partners'; // 'partners' or 'clubrooms'
let activeChatPartnerId = "LP-01";
let activeClubRoomId = "ROOM-CLIMB";

// 4. App Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initConsentCheck();
  renderTopSportsChips();
  initMap();
  renderDiscoverChat();
  renderCalendarSessions();
  renderClubs();
  renderEligibleOpponents();
  renderPendingConsents();
  renderRankings();
  buildSportCategoriesModal();
});

// 5. Language Management
function initLanguage() {
  const saved = localStorage.getItem('sport_clubz_lang') || 'en';
  currentLang = saved;
  document.getElementById('langSelect').value = saved;
  applyTranslations();
}

function changeLanguage(langCode) {
  currentLang = langCode;
  localStorage.setItem('sport_clubz_lang', langCode);
  document.getElementById('langSelect').value = langCode;
  applyTranslations();
  showToast(`Language switched to ${langCode.toUpperCase()}`);
}

function applyTranslations() {
  const dict = i18nData[currentLang] || i18nData['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  renderTopSportsChips();
  renderDiscoverChat();
  renderCalendarSessions();
  renderEligibleOpponents();
  renderRankings();
}

// 6. User Selected Sports Categories on Top Bar (Requirement 18)
function renderTopSportsChips() {
  const container = document.getElementById('userSelectedSportsChips');
  if (!container) return;
  container.innerHTML = '';

  DB.currentUser.selectedSports.forEach(sport => {
    const chip = document.createElement('div');
    chip.className = "inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 px-2.5 py-0.5 rounded-full text-xs font-medium cursor-pointer transition shadow-sm";
    chip.innerHTML = `
      <span>${sport}</span>
      <button onclick="removeUserSport('${sport}')" title="Remove sport" class="text-slate-500 hover:text-rose-400 ml-1">
        <i class="fa-solid fa-xmark text-[9px]"></i>
      </button>
    `;
    chip.onclick = (e) => {
      if (e.target.closest('button')) return;
      filterBySelectedSport(sport);
    };
    container.appendChild(chip);
  });
}

function filterBySelectedSport(sport) {
  document.getElementById('mapSportFilter').value = sport;
  updateMapMarkers();
  document.getElementById('calSportFilter').value = sport;
  renderCalendarSessions();
  document.getElementById('challengeSportSelect').value = sport;
  renderEligibleOpponents();
  showToast(`Filtered app views to: ${sport}`);
}

function removeUserSport(sport) {
  DB.currentUser.selectedSports = DB.currentUser.selectedSports.filter(s => s !== sport);
  renderTopSportsChips();
  showToast(`Removed ${sport} from top interests`);
}

function addUserSport(sport) {
  if (!DB.currentUser.selectedSports.includes(sport)) {
    DB.currentUser.selectedSports.push(sport);
    renderTopSportsChips();
    showToast(`Added ${sport} to your top interests!`);
  }
}

function openSportCategoryModal() {
  document.getElementById('sportCategoriesModal').classList.remove('hidden');
}

function buildSportCategoriesModal() {
  const container = document.getElementById('allSportsDirectory');
  if (!container) return;
  container.innerHTML = '';

  allSportCategories.forEach(cat => {
    const groupBlock = document.createElement('div');
    groupBlock.className = "bg-slate-900/70 p-3 rounded-xl border border-slate-700/80 space-y-2";
    
    let html = `<h4 class="font-bold text-xs text-sky-400 flex items-center gap-1.5"><i class="fa-solid fa-folder-open"></i> ${cat.group}</h4>`;
    html += `<div class="flex flex-wrap gap-1.5">`;

    cat.sports.forEach(sp => {
      const isSelected = DB.currentUser.selectedSports.includes(sp.name);
      html += `
        <button onclick="toggleSportSelection('${sp.name}')" class="px-2.5 py-1 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${isSelected ? 'bg-sky-600 text-white shadow' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
          <i class="fa-solid ${sp.icon} text-[10px]"></i>
          <span>${sp.name}</span>
          <span class="text-[10px] opacity-75">(${sp.labelEn})</span>
          ${isSelected ? '<i class="fa-solid fa-check text-[10px] ml-1"></i>' : ''}
        </button>
      `;
    });

    html += `</div>`;
    groupBlock.innerHTML = html;
    container.appendChild(groupBlock);
  });
}

function toggleSportSelection(sport) {
  if (DB.currentUser.selectedSports.includes(sport)) {
    removeUserSport(sport);
  } else {
    addUserSport(sport);
  }
  buildSportCategoriesModal();
}

// 7. Consent Check
function initConsentCheck() {
  const consented = localStorage.getItem('sport_clubz_consent_granted');
  if (!consented) {
    document.getElementById('consentModal').classList.remove('hidden');
  }
}

function confirmUserConsent() {
  const terms = document.getElementById('consentTerms').checked;
  const loc = document.getElementById('consentLocation').checked;
  const match = document.getElementById('consentChallenge').checked;

  if (!terms || !loc || !match) {
    alert("Please agree to all required terms to use the location matching and ranking system.");
    return;
  }

  localStorage.setItem('sport_clubz_consent_granted', 'true');
  document.getElementById('consentModal').classList.add('hidden');
  showToast("Consent granted! Welcome to Challenge - Sports clubz");
}

function openSecurityModal() {
  switchTab('profile');
}

function openConsentModal() {
  document.getElementById('consentModal').classList.remove('hidden');
}

function openShareModal() {
  document.getElementById('inviteModal').classList.remove('hidden');
}

function openInviteModal() {
  document.getElementById('inviteModal').classList.remove('hidden');
}

// 8. Navigation Switcher
function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  const targetPanel = document.getElementById(`tab-panel-${tabId}`) || document.getElementById(`tab-${tabId}`);
  const targetNav = document.getElementById(`nav-${tabId}`);

  if (targetPanel) targetPanel.classList.remove('hidden');
  if (targetNav) targetNav.classList.add('active');

  if (tabId === 'discover' && mapInstance) {
    setTimeout(() => {
      mapInstance.invalidateSize();
    }, 200);
  }
}

// 9. Interactive Map Engine
function initMap() {
  const defaultCoord = [37.5500, 126.9800]; // Seoul Central
  mapInstance = L.map('liveMap').setView(defaultCoord, 11);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors | Challenge - Sports clubz'
  }).addTo(mapInstance);

  updateMapMarkers();
}

function updateMapMarkers() {
  if (!mapInstance) return;

  mapMarkers.forEach(m => mapInstance.removeLayer(m));
  mapMarkers = [];

  const showClubs = document.getElementById('filterClubs').checked;
  const showPartners = document.getElementById('filterPartners').checked;
  const showMatches = document.getElementById('filterMatches').checked;
  const sportFilter = document.getElementById('mapSportFilter').value;

  // Clubs
  if (showClubs) {
    DB.clubs.forEach(club => {
      if (sportFilter !== 'all' && club.sport1 !== sportFilter && club.sport2 !== sportFilter) return;

      const iconHtml = `<div class="custom-map-marker bg-emerald-600 text-white w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs"><i class="fa-solid fa-users"></i></div>`;
      const customIcon = L.divIcon({ html: iconHtml, className: '', iconSize: [32, 32], iconAnchor: [16, 16] });

      const marker = L.marker([club.lat, club.lng], { icon: customIcon }).addTo(mapInstance);
      marker.on('click', () => selectClubDetails(club));
      mapMarkers.push(marker);
    });
  }

  // Live Partners
  if (showPartners) {
    DB.livePartners.forEach(partner => {
      if (sportFilter !== 'all' && partner.sport !== sportFilter) return;

      const iconHtml = `<div class="custom-map-marker bg-sky-500 text-white w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs animate-bounce"><i class="fa-solid fa-user"></i></div>`;
      const customIcon = L.divIcon({ html: iconHtml, className: '', iconSize: [32, 32], iconAnchor: [16, 16] });

      const marker = L.marker([partner.lat, partner.lng], { icon: customIcon }).addTo(mapInstance);
      marker.on('click', () => selectPartnerDetails(partner));
      mapMarkers.push(marker);
    });
  }

  // Competitions
  if (showMatches) {
    DB.competitions.forEach(comp => {
      if (sportFilter !== 'all' && comp.sport !== sportFilter) return;

      const iconHtml = `<div class="custom-map-marker bg-amber-500 text-white w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs"><i class="fa-solid fa-trophy"></i></div>`;
      const customIcon = L.divIcon({ html: iconHtml, className: '', iconSize: [32, 32], iconAnchor: [16, 16] });

      const marker = L.marker([comp.lat, comp.lng], { icon: customIcon }).addTo(mapInstance);
      marker.on('click', () => selectCompetitionDetails(comp));
      mapMarkers.push(marker);
    });
  }
}

function selectClubDetails(club) {
  currentSelectedEntity = { type: 'club', data: club };
  document.getElementById('selectedBadge').textContent = "Sports Club";
  document.getElementById('selectedBadge').className = "text-[11px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full";

  const content = `
    <div class="space-y-2.5">
      <div>
        <h4 class="font-bold text-base text-white">${club.name}</h4>
        <p class="text-xs text-slate-400">${club.address} • <span class="text-sky-400">${club.distanceKm} km away</span></p>
      </div>

      <div class="flex flex-wrap gap-1">
        <span class="bg-slate-700 text-sky-300 text-[11px] px-2 py-0.5 rounded">${club.sport1}</span>
        ${club.sport2 ? `<span class="bg-slate-700 text-slate-300 text-[11px] px-2 py-0.5 rounded">${club.sport2}</span>` : ''}
        <span class="bg-slate-700 text-emerald-300 text-[11px] px-2 py-0.5 rounded">Roster: ${club.memberCount} Members</span>
      </div>

      <div class="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-700/80 space-y-1">
        <div class="text-slate-400 font-medium">Description:</div>
        <div>${club.description}</div>
        <div class="pt-1 text-slate-400 font-medium">Schedule:</div>
        <div class="text-amber-300">${club.schedule}</div>
        <div class="pt-1 text-slate-400 font-medium">Monthly Dues / Session Fee:</div>
        <div class="text-emerald-400 font-bold">₩ ${club.monthlyFee.toLocaleString()} / mo (Session Fee: ₩ ${club.sessionCourtFee.toLocaleString()})</div>
      </div>
    </div>
  `;

  document.getElementById('selectedDetailContent').innerHTML = content;
  document.getElementById('selectedActions').classList.remove('hidden');
  document.getElementById('btnPingPartner').classList.add('hidden');
  document.getElementById('btnParticipateClub').classList.remove('hidden');
  document.getElementById('btnParticipateClub').innerHTML = `<i class="fa-solid fa-user-plus mr-1"></i> Join Club Session`;
}

function selectPartnerDetails(partner) {
  currentSelectedEntity = { type: 'partner', data: partner };
  document.getElementById('selectedBadge').textContent = "Live Partner Search";
  document.getElementById('selectedBadge').className = "text-[11px] bg-sky-500/20 text-sky-400 border border-sky-500/30 px-2 py-0.5 rounded-full";

  const content = `
    <div class="space-y-2.5">
      <div>
        <h4 class="font-bold text-base text-white">${partner.name}</h4>
        <p class="text-xs text-sky-400">${partner.distance} • Live GPS Verified</p>
      </div>

      <div class="flex gap-2">
        <span class="bg-slate-700 text-sky-300 text-[11px] px-2 py-0.5 rounded">Sport: ${partner.sport}</span>
        <span class="bg-slate-700 text-amber-300 text-[11px] px-2 py-0.5 rounded">Rank: #${partner.rank}</span>
      </div>

      <div class="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-700/80 space-y-1">
        <div class="text-slate-400">Status:</div>
        <div class="text-emerald-400 font-medium">"${partner.status}"</div>
        <div class="text-slate-400 pt-1">Ping Status:</div>
        <div class="font-semibold ${partner.pingStatus === 'accepted' ? 'text-emerald-400' : (partner.pingStatus === 'pending' ? 'text-amber-400' : 'text-slate-400')}">
          ${partner.pingStatus === 'accepted' ? 'Accepted (Chat Open)' : (partner.pingStatus === 'pending' ? 'Pending Acceptance' : 'Not Contacted')}
        </div>
      </div>
    </div>
  `;

  document.getElementById('selectedDetailContent').innerHTML = content;
  document.getElementById('selectedActions').classList.remove('hidden');
  document.getElementById('btnPingPartner').classList.remove('hidden');
  document.getElementById('btnParticipateClub').classList.add('hidden');

  // Add partner to chat table if not already added
  partner.isSelectedForChat = true;
  activeChatPartnerId = partner.id;
  renderDiscoverChat();
}

function selectCompetitionDetails(comp) {
  currentSelectedEntity = { type: 'competition', data: comp };
  document.getElementById('selectedBadge').textContent = "Official Competition";
  document.getElementById('selectedBadge').className = "text-[11px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full";

  const content = `
    <div class="space-y-2.5">
      <div>
        <h4 class="font-bold text-base text-white">${comp.title}</h4>
        <p class="text-xs text-slate-400">${comp.venue} • Date: ${comp.date}</p>
      </div>

      <div class="text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-700/80">
        <div class="text-slate-400 font-medium">Official Prize:</div>
        <div class="text-amber-400 font-semibold">${comp.prize}</div>
      </div>
    </div>
  `;

  document.getElementById('selectedDetailContent').innerHTML = content;
  document.getElementById('selectedActions').classList.remove('hidden');
  document.getElementById('btnPingPartner').classList.add('hidden');
  document.getElementById('btnParticipateClub').classList.remove('hidden');
  document.getElementById('btnParticipateClub').innerHTML = `<i class="fa-solid fa-trophy mr-1"></i> Register Tournament`;
}

function pingSelectedPartner() {
  if (!currentSelectedEntity || currentSelectedEntity.type !== 'partner') return;
  const partner = currentSelectedEntity.data;
  partner.pingStatus = 'pending';
  partner.isSelectedForChat = true;
  activeChatPartnerId = partner.id;
  renderDiscoverChat();
  showToast(`Ping sent to ${partner.name}! Waiting for them to accept chat.`);
}

function participateSelectedClub() {
  if (!currentSelectedEntity) return;
  if (currentSelectedEntity.type === 'club') {
    openPaymentCheckout(`${currentSelectedEntity.data.name} Session Fee`, currentSelectedEntity.data.sessionCourtFee, 'Club Session');
  } else if (currentSelectedEntity.type === 'competition') {
    openPaymentCheckout(currentSelectedEntity.data.title, 35000, 'Competition');
  }
}

function challengeDirectFromMap() {
  if (!currentSelectedEntity) return;
  openNewChallengeModal();
  if (currentSelectedEntity.data.name) {
    document.getElementById('formChallengeTarget').value = currentSelectedEntity.data.name;
  }
  if (currentSelectedEntity.data.sport || currentSelectedEntity.data.sport1) {
    document.getElementById('formChallengeSport').value = currentSelectedEntity.data.sport || currentSelectedEntity.data.sport1;
  }
}

// 10. DISCOVER CHAT ENGINE & PARTNER PING SYSTEM (Requirement 20)
function switchChatChannel(channel) {
  currentChatChannel = channel;
  if (channel === 'partners') {
    document.getElementById('chat-tab-partners').className = "px-3 py-1 rounded-lg bg-brand-600 text-white font-medium transition";
    document.getElementById('chat-tab-clubrooms').className = "px-3 py-1 rounded-lg text-slate-400 hover:text-white transition";
  } else {
    document.getElementById('chat-tab-partners').className = "px-3 py-1 rounded-lg text-slate-400 hover:text-white transition";
    document.getElementById('chat-tab-clubrooms').className = "px-3 py-1 rounded-lg bg-brand-600 text-white font-medium transition";
  }
  renderDiscoverChat();
}

function renderDiscoverChat() {
  const tableBody = document.getElementById('partnersChatTableBody');
  const countBadge = document.getElementById('selectedPartnersCount');
  tableBody.innerHTML = '';

  if (currentChatChannel === 'partners') {
    const chatPartners = DB.livePartners.filter(p => p.isSelectedForChat);
    countBadge.textContent = `${chatPartners.length} Selected`;

    chatPartners.forEach(p => {
      const isCurrent = p.id === activeChatPartnerId;
      let statusBadge = '';
      if (p.pingStatus === 'accepted') {
        statusBadge = `<span class="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded text-[10px] font-semibold">Accepted</span>`;
      } else if (p.pingStatus === 'pending') {
        statusBadge = `<span class="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded text-[10px] font-semibold">Pending</span>`;
      } else {
        statusBadge = `<span class="bg-slate-700 text-slate-400 px-1.5 py-0.5 rounded text-[10px]">No Ping</span>`;
      }

      let tr = document.createElement('tr');
      tr.className = `cursor-pointer hover:bg-slate-800 transition ${isCurrent ? 'bg-slate-800/90 font-medium' : ''}`;
      tr.innerHTML = `
        <td class="py-2 px-2"><input type="checkbox" checked class="rounded text-sky-500"></td>
        <td class="py-2 px-2 text-white" onclick="setActiveChatPartner('${p.id}')">${p.name}</td>
        <td class="py-2 px-2 text-sky-400" onclick="setActiveChatPartner('${p.id}')">${p.sport}</td>
        <td class="py-2 px-2" onclick="setActiveChatPartner('${p.id}')">${statusBadge}</td>
        <td class="py-2 px-2 text-right">
          ${p.pingStatus === 'accepted' ? `
            <button onclick="setActiveChatPartner('${p.id}')" class="text-sky-400 hover:text-sky-300 text-xs font-semibold">Chat</button>
          ` : (p.pingStatus === 'pending' ? `
            <button onclick="simulateAcceptPing('${p.id}')" title="Simulate Acceptance" class="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[10px] px-2 py-0.5 rounded border border-amber-500/40">Sim. Accept</button>
          ` : `
            <button onclick="pingPartnerDirect('${p.id}')" class="bg-sky-600 hover:bg-sky-500 text-white text-[10px] px-2 py-0.5 rounded">⚡ Ping</button>
          `)}
        </td>
      `;
      tableBody.appendChild(tr);
    });

    renderActiveConversation();
  } else {
    // Club Chatrooms
    countBadge.textContent = `${DB.clubRooms.length} Club Rooms`;
    DB.clubRooms.forEach(room => {
      const isCurrent = room.id === activeClubRoomId;
      let tr = document.createElement('tr');
      tr.className = `cursor-pointer hover:bg-slate-800 transition ${isCurrent ? 'bg-slate-800/90 font-medium' : ''}`;
      tr.innerHTML = `
        <td class="py-2 px-2"><i class="fa-solid fa-users text-emerald-400"></i></td>
        <td class="py-2 px-2 text-white" onclick="setActiveClubRoom('${room.id}')">${room.clubName}</td>
        <td class="py-2 px-2 text-sky-400" onclick="setActiveClubRoom('${room.id}')">${room.sport}</td>
        <td class="py-2 px-2 text-slate-400" onclick="setActiveClubRoom('${room.id}')">${room.membersCount} Members</td>
        <td class="py-2 px-2 text-right">
          <button onclick="setActiveClubRoom('${room.id}')" class="text-emerald-400 hover:text-emerald-300 text-xs font-semibold">Enter</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });

    renderActiveClubConversation();
  }
}

function setActiveChatPartner(partnerId) {
  activeChatPartnerId = partnerId;
  renderDiscoverChat();
}

function setActiveClubRoom(roomId) {
  activeClubRoomId = roomId;
  renderDiscoverChat();
}

function pingPartnerDirect(partnerId) {
  const p = DB.livePartners.find(item => item.id === partnerId);
  if (p) {
    p.pingStatus = 'pending';
    renderDiscoverChat();
    showToast(`Ping sent to ${p.name}!`);
  }
}

function simulateAcceptPing(partnerId) {
  const p = DB.livePartners.find(item => item.id === partnerId);
  if (p) {
    p.pingStatus = 'accepted';
    if (!p.messages.length) {
      p.messages.push({ sender: p.name, time: "Just now", text: "Ping accepted! Let's arrange our match." });
    }
    renderDiscoverChat();
    showToast(`${p.name} accepted your ping! Chat is now unlocked.`);
  }
}

function renderActiveConversation() {
  const partner = DB.livePartners.find(p => p.id === activeChatPartnerId) || DB.livePartners[0];
  const titleEl = document.getElementById('activeChatTitle');
  const statusEl = document.getElementById('activeChatStatus');
  const badgeEl = document.getElementById('activeChatBadge');
  const logEl = document.getElementById('chatMessagesLog');
  const overlayEl = document.getElementById('chatLockedOverlay');
  const formEl = document.getElementById('chatMessageForm');

  titleEl.textContent = `${partner.name} (${partner.sport})`;
  badgeEl.textContent = "1:1 Partner";

  if (partner.pingStatus === 'accepted') {
    statusEl.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Ping Accepted • Chat Unlocked`;
    statusEl.className = "text-[10px] text-emerald-400 flex items-center gap-1";
    overlayEl.classList.add('hidden');
    formEl.classList.remove('hidden');
  } else {
    statusEl.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> ${partner.pingStatus === 'pending' ? 'Pending Acceptance' : 'Ping Required'} • Chat Gated`;
    statusEl.className = "text-[10px] text-amber-400 flex items-center gap-1";
    overlayEl.classList.remove('hidden');
    formEl.classList.add('hidden');
  }

  logEl.innerHTML = '';
  if (!partner.messages || partner.messages.length === 0) {
    logEl.innerHTML = `<div class="text-center py-8 text-slate-500 text-xs">No messages yet. Once ping is accepted, messages will appear here.</div>`;
  } else {
    partner.messages.forEach(m => {
      const isMe = m.sender === 'Edcat';
      const msgDiv = document.createElement('div');
      msgDiv.className = `flex flex-col ${isMe ? 'items-end' : 'items-start'} space-y-1`;
      msgDiv.innerHTML = `
        <span class="text-[10px] text-slate-400">${m.sender} • ${m.time}</span>
        <div class="px-3 py-1.5 rounded-2xl max-w-xs ${isMe ? 'bg-brand-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'}">
          ${m.text}
        </div>
      `;
      logEl.appendChild(msgDiv);
    });
    logEl.scrollTop = logEl.scrollHeight;
  }
}

function renderActiveClubConversation() {
  const room = DB.clubRooms.find(r => r.id === activeClubRoomId) || DB.clubRooms[0];
  const titleEl = document.getElementById('activeChatTitle');
  const statusEl = document.getElementById('activeChatStatus');
  const badgeEl = document.getElementById('activeChatBadge');
  const logEl = document.getElementById('chatMessagesLog');
  const overlayEl = document.getElementById('chatLockedOverlay');
  const formEl = document.getElementById('chatMessageForm');

  titleEl.textContent = room.clubName;
  statusEl.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> ${room.membersCount} Members Active`;
  statusEl.className = "text-[10px] text-emerald-400 flex items-center gap-1";
  badgeEl.textContent = "Club Room";

  overlayEl.classList.add('hidden');
  formEl.classList.remove('hidden');

  logEl.innerHTML = '';
  room.messages.forEach(m => {
    const isMe = m.sender === 'Edcat';
    const msgDiv = document.createElement('div');
    msgDiv.className = `flex flex-col ${isMe ? 'items-end' : 'items-start'} space-y-1`;
    msgDiv.innerHTML = `
      <span class="text-[10px] text-slate-400">${m.sender} • ${m.time}</span>
      <div class="px-3 py-1.5 rounded-2xl max-w-xs ${isMe ? 'bg-brand-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'}">
        ${m.text}
      </div>
    `;
    logEl.appendChild(msgDiv);
  });
  logEl.scrollTop = logEl.scrollHeight;
}

function sendChatMessage(e) {
  e.preventDefault();
  const input = document.getElementById('chatInputText');
  const text = input.value.trim();
  if (!text) return;

  if (currentChatChannel === 'partners') {
    const partner = DB.livePartners.find(p => p.id === activeChatPartnerId);
    if (partner && partner.pingStatus === 'accepted') {
      partner.messages.push({ sender: "Edcat", time: "Just now", text });
      input.value = '';
      renderActiveConversation();
    }
  } else {
    const room = DB.clubRooms.find(r => r.id === activeClubRoomId);
    if (room) {
      room.messages.push({ sender: "Edcat", time: "Just now", text });
      input.value = '';
      renderActiveClubConversation();
    }
  }
}

function initiateSelectedGroupChat() {
  const groupName = prompt("Enter Group Chat Topic / Name (e.g. 'Weekend Bouldering & Freediving Crew'):", "Weekend Sports Crew");
  if (!groupName) return;

  DB.clubRooms.unshift({
    id: `GROUP-${Date.now()}`,
    clubName: `${groupName} (Group)`,
    sport: "다종목 (Multi)",
    membersCount: 4,
    messages: [
      { sender: "System", time: "Just now", text: `Group chat '${groupName}' created with selected partners!` }
    ]
  });

  currentChatChannel = 'clubrooms';
  activeClubRoomId = DB.clubRooms[0].id;
  renderDiscoverChat();
  showToast(`Group chat '${groupName}' initiated!`);
}

function sendDirectInvitation() {
  const code = document.getElementById('inviteUserCodeInput').value.trim();
  if (!code) {
    alert("Please enter a user code or handle.");
    return;
  }
  closeModal('inviteModal');
  showToast(`Invitation sent to ${code}!`);
}

function copyInviteLink() {
  navigator.clipboard?.writeText("https://challenge-sports-clubz.app/join?ref=USR-7729");
  showToast("Shareable invite link copied to clipboard!");
}

// 11. CALENDAR & SCHEDULED SESSIONS WITH REQUIRED PAYMENTS (Requirement 19)
function renderCalendarSessions() {
  const container = document.getElementById('calendarSessionsGrid');
  if (!container) return;
  container.innerHTML = '';

  const sportFilter = document.getElementById('calSportFilter').value;
  const sessions = DB.scheduledSessions.filter(s => sportFilter === 'all' || s.sport === sportFilter);

  sessions.forEach(sess => {
    const card = document.createElement('div');
    card.className = "bg-slate-800 rounded-2xl border border-slate-700 p-4 shadow-xl flex flex-col justify-between hover:border-slate-600 transition";
    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start mb-2">
          <span class="text-[11px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-semibold">
            ${sess.sport}
          </span>
          <span class="text-xs text-sky-400 font-medium">${sess.distance}</span>
        </div>

        <h3 class="font-bold text-sm text-white">${sess.clubName}</h3>
        <p class="text-xs text-amber-300 font-semibold mt-1">
          <i class="fa-regular fa-clock mr-1"></i> ${sess.date} (${sess.time})
        </p>
        <p class="text-xs text-slate-400 mt-0.5">
          <i class="fa-solid fa-location-dot mr-1 text-slate-500"></i> ${sess.venue}
        </p>

        <!-- Required Payment Details Section (Rule 19) -->
        <div class="mt-3 p-3 bg-slate-900/80 rounded-xl border border-slate-700/80 space-y-1.5 text-xs">
          <div class="flex justify-between items-center">
            <span class="text-slate-400">Required Fee:</span>
            <span class="font-semibold text-slate-200">${sess.requiredPayment.item}</span>
          </div>
          <div class="flex justify-between items-center pt-1 border-t border-slate-800">
            <span class="text-slate-400">Amount to Pay:</span>
            <span class="text-emerald-400 font-bold text-sm">₩ ${sess.requiredPayment.amount.toLocaleString()}</span>
          </div>
          <div class="flex justify-between items-center text-[11px] text-slate-400">
            <span>Roster Space:</span>
            <span class="text-sky-300">${sess.capacity}</span>
          </div>
        </div>
      </div>

      <div class="mt-4 pt-3 border-t border-slate-700 flex gap-2">
        <button onclick="openPaymentCheckout('${sess.clubName} Session (${sess.requiredPayment.item})', ${sess.requiredPayment.amount}, 'Club Session')" class="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold py-2 rounded-xl transition flex items-center justify-center gap-1.5 shadow">
          <i class="fa-solid fa-credit-card text-xs"></i> Book & Pay Dues
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// 12. Challenge Engine (2~3 Ranks Above)
function toggleChallengeMode(mode) {
  currentChallengeMode = mode;
  if (mode === 'individual') {
    document.getElementById('btn-mode-individual').className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-orange-500 text-white shadow-md transition";
    document.getElementById('btn-mode-club').className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition";
  } else {
    document.getElementById('btn-mode-individual').className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition";
    document.getElementById('btn-mode-club').className = "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-orange-500 text-white shadow-md transition";
  }
  renderEligibleOpponents();
}

function renderEligibleOpponents() {
  const sport = document.getElementById('challengeSportSelect').value;
  const userRank = DB.currentUser.rank; // 5

  const allowedUpperRanks = [userRank - 2, userRank - 3].filter(r => r >= 1);
  document.getElementById('myRankDisplay').textContent = `Your Rank: #${userRank} (Eligible Official Targets: #${allowedUpperRanks.join(', #')})`;

  const tbody = document.getElementById('opponentsTableBody');
  tbody.innerHTML = '';

  const candidates = DB.rankings.filter(r => r.entityType === currentChallengeMode && (sport === 'all' || r.sport === sport));

  candidates.forEach(item => {
    const isEligible = allowedUpperRanks.includes(item.rank);
    const isSelf = item.name.includes("You");

    let badgeClass = isEligible ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-slate-700 text-slate-400";
    let statusText = isEligible ? "Eligible (2~3 Ranks Above)" : (item.rank < userRank ? "Too High Level" : (isSelf ? "Self" : "Lower / Ineligible"));

    let tr = document.createElement('tr');
    tr.className = "hover:bg-slate-700/40 transition";
    tr.innerHTML = `
      <td class="px-4 py-3 font-bold ${item.rank <= 3 ? 'text-amber-400' : 'text-slate-300'}">
        #${item.rank}
      </td>
      <td class="px-4 py-3 font-medium text-white flex items-center gap-2">
        <div class="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold">
          ${item.name.slice(0, 1)}
        </div>
        ${item.name}
      </td>
      <td class="px-4 py-3 text-slate-400">${item.region}</td>
      <td class="px-4 py-3 text-sky-400">${item.sport}</td>
      <td class="px-4 py-3 text-slate-300">${item.matches}</td>
      <td class="px-4 py-3">
        <span class="px-2 py-0.5 rounded-full text-[11px] font-medium ${badgeClass}">
          ${statusText}
        </span>
      </td>
      <td class="px-4 py-3 text-right">
        ${isEligible ? `
          <button onclick="requestChallengeDirect('${item.name}', '${item.sport}', ${item.rank})" class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow transition flex items-center gap-1 ml-auto">
            <i class="fa-solid fa-bolt text-[10px]"></i> Challenge
          </button>
        ` : `
          <button disabled class="bg-slate-700/50 text-slate-500 cursor-not-allowed px-3 py-1 rounded-lg text-xs font-semibold ml-auto">
            Locked
          </button>
        `}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function requestChallengeDirect(name, sport, rank) {
  openNewChallengeModal();
  document.getElementById('formChallengeTarget').value = name;
  document.getElementById('formChallengeSport').value = sport;
}

// 13. Dual Consent Queue
function renderPendingConsents() {
  const container = document.getElementById('pendingConsentsList');
  container.innerHTML = '';

  DB.pendingConsents.forEach(item => {
    const card = document.createElement('div');
    card.className = "bg-slate-900/90 border border-slate-700 rounded-xl p-4 flex flex-col justify-between space-y-3";
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between text-[11px] text-slate-400 mb-1">
          <span>${item.date} • ${item.sport}</span>
          <span class="text-amber-400 font-semibold">${item.pointsProposed}</span>
        </div>
        <h4 class="font-bold text-white text-xs sm:text-sm">${item.competition}</h4>
        <div class="mt-2 text-xs bg-slate-800/80 p-2 rounded-lg border border-slate-700 flex justify-between items-center">
          <span class="text-emerald-400 font-semibold">Winner: ${item.wonPlayer}</span>
          <span class="text-slate-400">Score: ${item.scoreResult}</span>
          <span class="text-rose-400 font-semibold">Defeated: ${item.lostPlayer}</span>
        </div>
      </div>

      <div class="pt-2 border-t border-slate-800 flex items-center justify-between">
        <span class="text-[11px] text-slate-400 flex items-center gap-1">
          <i class="fa-solid fa-clock text-amber-400"></i> ${item.consentStatus}
        </span>
        ${item.canIApprove ? `
          <button onclick="approveConsent('${item.id}')" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-lg transition">
            Consent & Sign
          </button>
        ` : `
          <button onclick="remindOpponent('${item.id}')" class="bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs px-2.5 py-1 rounded-lg transition">
            Send Reminder
          </button>
        `}
      </div>
    `;
    container.appendChild(card);
  });
}

function approveConsent(id) {
  const target = DB.pendingConsents.find(c => c.id === id);
  if (target) {
    target.consentStatus = "Both Parties Agreed (Saved to Google Sheet DB)";
    target.canIApprove = false;
    renderPendingConsents();
    showToast("Match result verified and synchronized with Google Sheets!");
  }
}

function remindOpponent(id) {
  showToast("Reminder sent to opponent to verify the score on system.");
}

// 14. Top AI Matching Engine
function triggerAIMatch(type) {
  const modal = document.getElementById('aiMatchModal');
  const title = document.getElementById('aiModalTitle');
  const body = document.getElementById('aiModalBody');

  if (type === 'partner') {
    title.innerHTML = `<i class="fa-solid fa-user-group text-sky-400 mr-2"></i> AI Random Partner Match`;
    const randomPartner = DB.livePartners[Math.floor(Math.random() * DB.livePartners.length)];
    body.innerHTML = `
      <div class="bg-slate-900 p-4 rounded-xl border border-slate-700 space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-xs bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded-full font-medium">98% Compatibility</span>
          <span class="text-slate-400 text-xs">${randomPartner.sport}</span>
        </div>
        <h4 class="text-white font-bold text-sm">${randomPartner.name}</h4>
        <p class="text-xs text-slate-300">"${randomPartner.status}"</p>
        <div class="text-[11px] text-slate-400 pt-1">Rank: #${randomPartner.rank} • Located: ${randomPartner.distance}</div>
      </div>
      <button onclick="requestChallengeDirect('${randomPartner.name}', '${randomPartner.sport}', ${randomPartner.rank}); closeModal('aiMatchModal');" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-xl text-xs transition">
        Invite to Immediate Match
      </button>
    `;
  } else if (type === 'sport') {
    title.innerHTML = `<i class="fa-solid fa-person-running text-emerald-400 mr-2"></i> AI Sport Suggestion`;
    const sports = ["프리다이빙 (Freediving)", "클라이밍 (Climbing)", "수중하키 (Underwater Hockey)", "배드민턴 (Badminton)", "테니스 (Tennis)"];
    const chosen = sports[Math.floor(Math.random() * sports.length)];
    body.innerHTML = `
      <div class="bg-slate-900 p-4 rounded-xl border border-slate-700 space-y-2">
        <div class="text-xs text-emerald-400 font-semibold">Recommended Sport for Today:</div>
        <h4 class="text-white font-bold text-base">${chosen}</h4>
        <p class="text-xs text-slate-300">Based on your athletic stamina profile and local weather conditions in Seoul, this sport is in high demand with 4 active clubs hosting sessions this week.</p>
      </div>
      <button onclick="switchTab('clubs'); closeModal('aiMatchModal');" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 rounded-xl text-xs transition">
        Find Clubs in this Sport
      </button>
    `;
  } else if (type === 'travel_club') {
    title.innerHTML = `<i class="fa-solid fa-plane-departure text-purple-400 mr-2"></i> AI Travel & Away Club Matching`;
    const clubs = DB.clubs.filter(c => c.region.includes("제주") || c.region.includes("부산") || c.region.includes("마포"));
    const chosenClub = clubs[Math.floor(Math.random() * clubs.length)];
    body.innerHTML = `
      <div class="bg-slate-900 p-4 rounded-xl border border-slate-700 space-y-2">
        <div class="text-xs text-purple-400 font-semibold">Recommended Destination Club:</div>
        <h4 class="text-white font-bold text-base">${chosenClub.name}</h4>
        <p class="text-xs text-slate-300">${chosenClub.description}</p>
        <div class="text-[11px] text-slate-400">Location: ${chosenClub.address}</div>
        <div class="text-[11px] text-amber-300">Schedule: ${chosenClub.schedule}</div>
      </div>
      <button onclick="selectClubDetails(DB.clubs.find(c => c.id === '${chosenClub.id}')); switchTab('discover'); closeModal('aiMatchModal');" class="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 rounded-xl text-xs transition">
        View on Live Map & Join
      </button>
    `;
  }

  modal.classList.remove('hidden');
}

// 15. Rankings Module
function setRankType(type) {
  currentRankType = type;
  if (type === 'personal') {
    document.getElementById('rank-type-personal').className = "px-2.5 py-1 rounded-lg bg-brand-600 text-white font-medium transition";
    document.getElementById('rank-type-club').className = "px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition";
  } else {
    document.getElementById('rank-type-personal').className = "px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition";
    document.getElementById('rank-type-club').className = "px-2.5 py-1 rounded-lg bg-brand-600 text-white font-medium transition";
  }
  renderRankings();
}

function renderRankings() {
  const sport = document.getElementById('rankSportFilter').value;
  const tbody = document.getElementById('rankingsTableBody');
  tbody.innerHTML = '';

  const items = DB.rankings.filter(r => r.entityType === currentRankType && (sport === '전체' || r.sport === sport));

  items.forEach(item => {
    let tr = document.createElement('tr');
    tr.className = "hover:bg-slate-700/40 transition";
    tr.innerHTML = `
      <td class="px-4 py-3.5 font-bold ${item.rank <= 3 ? 'text-amber-400' : 'text-slate-300'}">
        #${item.rank}
      </td>
      <td class="px-4 py-3.5 font-medium text-white flex items-center gap-2">
        <div class="w-7 h-7 rounded-xl ${item.rank <= 3 ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-700 text-slate-300'} flex items-center justify-center text-xs font-bold">
          ${item.name.slice(0, 1)}
        </div>
        ${item.name}
      </td>
      <td class="px-4 py-3.5 text-sky-400">${item.sport}</td>
      <td class="px-4 py-3.5 text-slate-400">${item.region}</td>
      <td class="px-4 py-3.5 font-bold text-white">${item.score.toLocaleString()}</td>
      <td class="px-4 py-3.5">
        <span class="px-2 py-0.5 rounded-full text-[11px] bg-slate-700 text-slate-200">
          ${item.level}
        </span>
      </td>
      <td class="px-4 py-3.5 text-right">
        <button onclick="requestChallengeDirect('${item.name}', '${item.sport}', ${item.rank})" class="text-orange-400 hover:text-orange-300 text-xs font-semibold">
          Challenge <i class="fa-solid fa-chevron-right text-[10px]"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// 16. Clubs Directory
function renderClubs() {
  const container = document.getElementById('clubsGrid');
  container.innerHTML = '';

  DB.clubs.forEach(club => {
    const card = document.createElement('div');
    card.className = "bg-slate-800 rounded-2xl border border-slate-700 p-4 shadow-xl flex flex-col justify-between hover:border-slate-600 transition";
    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start mb-2">
          <span class="text-[11px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">
            ${club.sport1}
          </span>
          <span class="text-xs text-slate-400">${club.region}</span>
        </div>

        <h3 class="font-bold text-sm text-white">${club.name}</h3>
        <p class="text-xs text-slate-400 mt-1 line-clamp-2">${club.description}</p>

        <div class="mt-3 text-xs bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60 space-y-1 text-slate-300">
          <div class="flex justify-between">
            <span class="text-slate-400">Schedule:</span>
            <span class="text-amber-300 font-medium">${club.schedule}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Monthly Dues:</span>
            <span class="text-emerald-400 font-bold">₩ ${club.monthlyFee.toLocaleString()}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Members:</span>
            <span>${club.memberCount} Athletes</span>
          </div>
        </div>
      </div>

      <div class="mt-4 pt-3 border-t border-slate-700 flex gap-2">
        <button onclick="selectClubDetails(DB.clubs.find(c => c.id === '${club.id}')); switchTab('discover');" class="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold py-2 rounded-xl transition flex items-center justify-center gap-1">
          <i class="fa-solid fa-map-pin text-[11px]"></i> Map
        </button>
        <button onclick="openPaymentCheckout('${club.name} Monthly Dues', ${club.monthlyFee}, 'Club Dues')" class="flex-1 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold py-2 rounded-xl transition flex items-center justify-center gap-1">
          <i class="fa-solid fa-credit-card text-[11px]"></i> Join / Pay
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// 17. Payments Module
let activeCheckout = { item: '', amount: 0, category: '' };

function openPaymentCheckout(item, amount, category) {
  activeCheckout = { item, amount, category };
  document.getElementById('checkoutItemName').textContent = item;
  document.getElementById('checkoutAmount').textContent = `₩ ${amount.toLocaleString()}`;
  document.getElementById('checkoutCategory').textContent = category;
  document.getElementById('paymentModal').classList.remove('hidden');
}

function selectPayMethod(method) {
  document.querySelectorAll('.pay-method-btn').forEach(btn => {
    btn.className = "pay-method-btn p-2.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 font-medium text-center";
  });
  event.target.className = "pay-method-btn p-2.5 rounded-xl border border-purple-500/50 bg-purple-500/10 text-purple-300 font-medium text-center";
}

function executePayment() {
  closeModal('paymentModal');
  showToast(`Payment of ₩ ${activeCheckout.amount.toLocaleString()} for '${activeCheckout.item}' completed!`);
}

// 18. Modals & Forms
function openNewChallengeModal() {
  document.getElementById('newChallengeModal').classList.remove('hidden');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}

function submitChallengeForm(e) {
  e.preventDefault();
  const target = document.getElementById('formChallengeTarget').value;
  const sport = document.getElementById('formChallengeSport').value;
  const venue = document.getElementById('formChallengeVenue').value;

  closeModal('newChallengeModal');
  showToast(`Official challenge issued to ${target} for ${sport}! Waiting for their consent.`);
}

function openCreateClubModal() {
  alert("New club registration wizard opened. Fill in sport category, schedule, and venue address.");
}

// 19. Toast Notifications
function showToast(msg) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toastMsg');
  msgEl.textContent = msg;

  toast.classList.remove('translate-y-20', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3500);
}
