// 질문 데이터
const questions = [
    {
        question: "여행 계획을 세울 때 당신의 스타일은?",
        answers: [
            "일정표를 미리 엑셀로 만들고 숙소·맛집까지 조사한다",
            "대략적인 루트만 잡고 현지 감성에 맡긴다",
            "하루하루 즉흥적으로 정하며 발길 가는 대로 움직인다",
            "친구가 짜준 계획을 따라가는 편이다"
        ]
    },
    {
        question: "여행지에서 가장 먼저 하고 싶은 것은?",
        answers: [
            "유명한 랜드마크 찍기",
            "로컬 음식 먹어보기",
            "사진 찍을 포인트 찾기",
            "카페나 숙소에서 여유 부리기"
        ]
    },
    {
        question: "평소 당신의 스트레스 해소법은?",
        answers: [
            "숲이나 바다 같은 자연 속으로 가기",
            "사람들과 수다 떨며 해소",
            "방 안에서 나만의 시간 보내기",
            "클럽, 공연 등 시끄러운 곳에서 놀기"
        ]
    },
    {
        question: "새로운 장소를 갔을 때 당신은?",
        answers: [
            "지도를 보며 주요 포인트부터 체크한다",
            "사람들 따라가며 분위기 느껴본다",
            "현지인들과 대화하며 정보를 얻는다",
            "별 생각 없이 발길 닿는 대로 걷는다"
        ]
    },
    {
        question: "SNS에 올리고 싶은 여행 콘텐츠는?",
        answers: [
            "멋진 자연 풍경 사진",
            "로컬 음식 사진",
            "감성 있는 내 셀카 or 분위기 샷",
            "웃긴 에피소드나 짤"
        ]
    },
    {
        question: "여행 중 하루 날씨가 흐리다면 당신은?",
        answers: [
            "박물관, 미술관 등 실내 명소 위주로 이동",
            "비와 함께하는 풍경을 감상",
            "숙소에서 조용히 책이나 영화",
            "날씨 신경 안 쓰고 그냥 밖으로 나간다"
        ]
    },
    {
        question: "숙소를 고를 때 가장 중요하게 보는 건?",
        answers: [
            "청결과 위치, 후기 점수",
            "로컬 감성 / 인테리어 분위기",
            "전망과 사진이 잘 나올 것",
            "가격 대비 가성비"
        ]
    },
    {
        question: "당신의 성격은 다음 중 무엇에 가깝나요?",
        answers: [
            "신중하고 계획적인 타입",
            "자유롭고 유연한 타입",
            "섬세하고 감성적인 타입",
            "쾌활하고 사교적인 타입"
        ]
    },
    {
        question: "인생에서 중요하다고 느끼는 가치는?",
        answers: [
            "안정과 평화",
            "도전과 성장",
            "예술과 감성",
            "유쾌함과 인간관계"
        ]
    },
    {
        question: "당신의 이상적인 '휴식'은?",
        answers: [
            "사람 없는 한적한 자연에서 멍 때리기",
            "바다 보며 칵테일 마시기",
            "잔잔한 음악과 함께 책 읽기",
            "친구들과 늦게까지 수다 떨기"
        ]
    },
    {
        question: "어떤 여행 사진이 가장 끌리나요?",
        answers: [
            "알프스 설산과 푸른 호수",
            "노을 진 해변과 야자수",
            "감성적인 골목길과 카페",
            "시장, 거리공연, 사람 북적이는 모습"
        ]
    },
    {
        question: "평소 주말 일상은 어떤가요?",
        answers: [
            "운동, 장보기, 정리 등 생산적인 활동",
            "카페 탐방이나 산책",
            "집콕하며 콘텐츠 몰아보기",
            "친구들과 술 약속이나 외출"
        ]
    },
    {
        question: "좋아하는 영화 장르는?",
        answers: [
            "힐링 다큐나 여행 영화",
            "모험·판타지 영화",
            "예술영화·로맨스",
            "코미디나 액션"
        ]
    },
    {
        question: "여행을 마치고 돌아왔을 때 가장 듣고 싶은 말은?",
        answers: [
            "\"잘 쉬고 온 것 같아 보여\"",
            "\"진짜 너다운 여행이었네\"",
            "\"감성 충만했겠다~\"",
            "\"개재밌었겠다ㅋㅋ 부럽다\""
        ]
    },
    {
        question: "마지막으로, 당신의 성향을 한 마디로 표현하자면?",
        answers: [
            "차분하고 안정적인 사람",
            "자유롭고 즉흥적인 사람",
            "감성적이고 예민한 사람",
            "활발하고 에너지 넘치는 사람"
        ]
    }
];

// 결과 데이터
const results = [
    // A 성향 (계획적/안정적) - 자연, 평화, 힐링 관련
    {
        title: "자연을 닮은 당신, 베트남 다낭",
        description: "푸른 바다와 자연이 어우러진 다낭에서 마음의 평화를 찾으세요. 계획적이고 안정적인 당신에게 완벽한 힐링 여행지입니다.",
        image: "images/danang.jpg",
        type: "A"
    },
    {
        title: "평화주의자, 뉴질랜드 퀸스타운",
        description: "조용한 평화, 퀸스타운의 바람이 당신을 부릅니다. 자연 속에서 진정한 휴식을 찾는 당신을 위한 곳입니다.",
        image: "images/queenstown.jpg",
        type: "A"
    },
    {
        title: "여유로운 삶을 지향하는 당신, 인도네시아 발리",
        description: "파도소리에 스며든 여유, 발리에서 찾으세요. 계획적이면서도 여유로운 당신의 성향에 딱 맞는 여행지입니다.",
        image: "images/bali.jpg",
        type: "A"
    },
    {
        title: "힐링을 원하는 당신, 일본 오키나와",
        description: "소박한 휴식, 오키나와의 햇살이 당신을 치유합니다. 안정적이고 평화로운 여행을 원하는 당신에게 완벽합니다.",
        image: "images/okinawa.jpg",
        type: "A"
    },
    {
        title: "단순함을 사랑하는 당신, 핀란드 헬싱키",
        description: "심플한 삶의 미학, 헬싱키에서 발견하세요. 계획적이고 단순함을 추구하는 당신의 성향과 완벽하게 어울립니다.",
        image: "images/helsinki.jpg",
        type: "A"
    },
    {
        title: "자기 성찰형, 인도 리시케시",
        description: "마음의 소리를 듣는 곳, 리시케시에서 나를 찾으세요. 신중하고 내면을 중시하는 당신을 위한 영적 여행지입니다.",
        image: "images/rishikesh.jpg",
        type: "A"
    },

    // B 성향 (자유로운/모험적) - 자유, 모험, 도전 관련
    {
        title: "자유로운 영혼, 포르투갈 리스본",
        description: "자유로운 당신의 파도는 리스본의 언덕길에서 출렁여요. 모험을 즐기고 자유를 추구하는 당신에게 완벽한 도시입니다.",
        image: "images/lisbon.jpg",
        type: "B"
    },
    {
        title: "도전적인 당신, 페루 마추픽추",
        description: "세상 끝에 도전, 마추픽추에서 꿈을 이루세요. 모험을 즐기고 도전을 두려워하지 않는 당신을 위한 여행지입니다.",
        image: "images/machupicchu.jpg",
        type: "B"
    },
    {
        title: "디지털 노마드 지향, 태국 치앙마이",
        description: "Wi-Fi보다 따뜻한 치앙마이의 미소가 당신을 기다립니다. 자유롭고 유연한 라이프스타일을 추구하는 당신에게 완벽합니다.",
        image: "images/chiangmai.jpg",
        type: "B"
    },
    {
        title: "모험을 즐기는 당신, 남아프리카공화국 케이프타운",
        description: "사파리처럼 다이나믹한 당신, 케이프타운에서 모험을 시작하세요. 새로운 도전을 즐기는 당신을 위한 역동적인 도시입니다.",
        image: "images/capetown.jpg",
        type: "B"
    },
    {
        title: "이색적인 것에 끌리는 당신, 모로코 마라케시",
        description: "당신의 색은 오렌지빛 마라케시입니다. 독특하고 이색적인 경험을 추구하는 자유로운 영혼인 당신에게 완벽한 곳입니다.",
        image: "images/marrakesh.jpg",
        type: "B"
    },
    {
        title: "고요한 것을 좋아하는 당신, 아이슬란드 레이캬비크",
        description: "얼음과 불, 고요의 미학을 레이캬비크에서 경험하세요. 자유롭고 독특한 경험을 추구하는 당신을 위한 신비로운 도시입니다.",
        image: "images/reykjavik.jpg",
        type: "B"
    },

    // C 성향 (감성적/예술적) - 감성, 예술, 로맨스 관련
    {
        title: "감성 가득한 당신, 프랑스 파리",
        description: "감성 한 스푼, 파리 한 조각이 당신을 기다립니다. 예술과 로맨스를 사랑하는 감성적인 당신에게 완벽한 도시입니다.",
        image: "images/paris.jpg",
        type: "C"
    },
    {
        title: "몽환적인 당신, 체코 프라하",
        description: "몽환적인 도시, 프라하에서 나를 만나다. 감성적이고 예술적인 당신의 마음을 사로잡을 아름다운 도시입니다.",
        image: "images/prague.jpg",
        type: "C"
    },
    {
        title: "예술을 사랑하는 당신, 이탈리아 피렌체",
        description: "예술을 담은 도시, 피렌체와 당신이 만나다. 르네상스의 예술혼이 살아있는 이곳에서 감성을 충전하세요.",
        image: "images/florence.jpg",
        type: "C"
    },
    {
        title: "로맨티스트, 그리스 산토리니",
        description: "사랑은 푸른 바다, 산토리니에서 피어납니다. 로맨틱하고 감성적인 당신을 위한 꿈같은 여행지입니다.",
        image: "images/santorini.jpg",
        type: "C"
    },
    {
        title: "감각적인 당신, 스웨덴 스톡홀름",
        description: "북유럽 감성 충전소, 스톡홀름에서 세련미를 만끽하세요. 섬세하고 감각적인 당신의 취향에 완벽하게 어울리는 도시입니다.",
        image: "images/stockholm.jpg",
        type: "C"
    },
    {
        title: "섬세하고 예민한 당신, 네덜란드 암스테르담",
        description: "감성으로 채우는 물의 도시, 암스테르담에서 마음을 열어보세요. 예술과 자유로운 분위기를 사랑하는 당신을 위한 곳입니다.",
        image: "images/amsterdam.jpg",
        type: "C"
    },

    // D 성향 (사교적/활발한) - 활기, 파티, 소통 관련
    {
        title: "열정 가득한 당신, 멕시코 칸쿤",
        description: "뜨거운 태양, 당신을 닮았어요. 칸쿤에서 열정을 불태우세요. 활발하고 에너지 넘치는 당신을 위한 완벽한 파티 여행지입니다.",
        image: "images/cancun.jpg",
        type: "D"
    },
    {
        title: "사람과의 연결을 중시하는 당신, 스페인 바르셀로나",
        description: "거리에서 만나는 인연, 바르셀로나에서 새로운 만남을 경험하세요. 사교적이고 활발한 당신에게 완벽한 도시입니다.",
        image: "images/barcelona.jpg",
        type: "D"
    },
    {
        title: "파티러버, 브라질 리우데자네이루",
        description: "춤추는 밤, 리우는 당신의 무대입니다. 열정적이고 활기찬 당신을 위한 최고의 파티 도시입니다.",
        image: "images/rio.jpg",
        type: "D"
    },
    {
        title: "역사를 좋아하는 당신, 터키 이스탄불",
        description: "동서양이 만나는 곳, 이스탄불에서 역사를 만나세요. 사교적이면서 문화에 관심이 많은 당신을 위한 매력적인 도시입니다.",
        image: "images/istanbul.jpg",
        type: "D"
    },
    {
        title: "호기심 가득한 당신, 일본 도쿄",
        description: "호기심 천국, 도쿄 탐험기가 시작됩니다. 활발하고 새로운 것을 좋아하는 당신을 위한 무한한 가능성의 도시입니다.",
        image: "images/tokyo.jpg",
        type: "D"
    },
    {
        title: "혁신적이고 독립적인 당신, 싱가포르",
        description: "미래와 현재가 공존하는 도시, 싱가포르에서 새로운 가능성을 발견하세요. 활발하고 진취적인 당신을 위한 완벽한 도시입니다.",
        image: "images/singapore.jpg",
        type: "D"
    }
];

// 게임 상태
let currentQuestion = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };

// DOM 요소
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers');
const progressFill = document.getElementById('progress');
const questionCounter = document.getElementById('question-counter');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultImage = document.getElementById('result-image');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');

// 이벤트 리스너
startBtn.addEventListener('click', startTest);
restartBtn.addEventListener('click', restartTest);
shareBtn.addEventListener('click', shareResult);

function startTest() {
    startScreen.classList.remove('active');
    questionScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    questionCounter.textContent = `${currentQuestion + 1} / ${questions.length}`;
    
    // 진행률 업데이트
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // 답변 버튼 생성
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(answerIndex) {
    // 점수 계산 (A, B, C, D 순서)
    const scoreTypes = ['A', 'B', 'C', 'D'];
    scores[scoreTypes[answerIndex]]++;
    
    // 선택된 답변 표시
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[answerIndex].classList.add('selected');
    
    // 다음 질문으로 이동
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 500);
}

function showResult() {
    questionScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    // 가장 높은 점수의 성향 찾기
    const maxScore = Math.max(...Object.values(scores));
    const resultTypes = Object.keys(scores).filter(key => scores[key] === maxScore);
    const resultType = resultTypes[Math.floor(Math.random() * resultTypes.length)];
    
    // 해당 성향의 결과 중 랜덤 선택
    const typeResults = results.filter(result => result.type === resultType);
    const finalResult = typeResults[Math.floor(Math.random() * typeResults.length)];
    
    // 결과 표시
    resultTitle.textContent = finalResult.title;
    resultDescription.textContent = finalResult.description;
    resultImage.src = finalResult.image;
    resultImage.alt = finalResult.title;
}

function restartTest() {
    currentQuestion = 0;
    scores = { A: 0, B: 0, C: 0, D: 0 };
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    progressFill.style.width = '0%';
}

function shareResult() {
    const title = resultTitle.textContent;
    const description = resultDescription.textContent;
    const shareText = `${title}\n\n${description}\n\n이번 생에 가야 할 여행지 찾기 테스트 해보세요!`;
    
    if (navigator.share) {
        navigator.share({
            title: '이번 생에 가야 할 여행지 찾기',
            text: shareText,
            url: window.location.href
        });
    } else {
        // 클립보드에 복사
        navigator.clipboard.writeText(shareText).then(() => {
            alert('결과가 클립보드에 복사되었습니다!');
        });
    }
}

