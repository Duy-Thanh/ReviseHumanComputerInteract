document.addEventListener('DOMContentLoaded', () => {
    const chapterSelect = document.getElementById('chapter-select');
    const quizSection = document.getElementById('quiz-section');
    const chapterTitle = document.getElementById('chapter-title');
    const questionContainer = document.getElementById('question-container');
    const submitBtn = document.getElementById('submit-btn');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const resultDiv = document.getElementById('result');

    let currentChapterIndex = 0;
    let currentQuestionIndex = 0;
    let selectedQuestions = [];

    // Load chapters into the select dropdown
    function loadChapters() {
        chapterSelect.innerHTML = '<option value="">Chọn một chương</option>';
        quizData.forEach((chapterData, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = chapterData.chapter;
            chapterSelect.appendChild(option);
        });
    }

    // Load questions for the selected chapter
    function loadQuestion() {
        const chapter = quizData[currentChapterIndex];
        selectedQuestions = chapter.questions; // Assign questions for the current chapter
        
        if (currentQuestionIndex < selectedQuestions.length) {
            const questionData = selectedQuestions[currentQuestionIndex];
            chapterTitle.textContent = chapter.chapter;
            questionContainer.innerHTML = '';
            resultDiv.textContent = '';
            resultDiv.className = '';
            submitBtn.classList.remove('hidden');
            nextQuestionBtn.classList.add('hidden');

            const questionItem = document.createElement('div');
            questionItem.classList.add('question-item');

            const questionText = document.createElement('p');
            questionText.textContent = `${currentQuestionIndex + 1}. ${questionData.question}`;
            questionItem.appendChild(questionText);

            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('options');
            optionsDiv.id = `question-options-${currentQuestionIndex}`; // Add ID for easy access

            questionData.options.forEach((option, index) => {
                const label = document.createElement('label');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = `question-${currentQuestionIndex}`;
                checkbox.value = index;
                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(option));
                optionsDiv.appendChild(label);
            });
            questionItem.appendChild(optionsDiv);
            questionContainer.appendChild(questionItem);
        } else {
            // End of chapter
            questionContainer.innerHTML = '<p>Bạn đã hoàn thành tất cả câu hỏi trong chương này!</p>';
            submitBtn.classList.add('hidden');
            nextQuestionBtn.classList.add('hidden');
            resultDiv.textContent = 'Chúc mừng bạn đã hoàn thành chương!';
            resultDiv.className = 'correct-answer';
        }
    }

    // Check answers
    function checkAnswer() {
        const questionData = selectedQuestions[currentQuestionIndex];
        const selectedOptions = Array.from(document.querySelectorAll(`#question-options-${currentQuestionIndex} input[type="checkbox"]:checked`)).map(cb => parseInt(cb.value));
        const optionsLabels = document.querySelectorAll(`#question-options-${currentQuestionIndex} label`);

        let isCorrect = true;
        
        // Highlight correct/incorrect selected options
        optionsLabels.forEach((label, index) => {
            if (questionData.correct.includes(index)) {
                label.classList.add('option-correct'); // Mark actual correct answers
            }
            if (selectedOptions.includes(index) && !questionData.correct.includes(index)) {
                label.classList.add('option-incorrect'); // Mark selected but wrong
                isCorrect = false;
            }
            if (!selectedOptions.includes(index) && questionData.correct.includes(index)) {
                isCorrect = false; // Missing a correct answer
            }
            label.querySelector('input').disabled = true; // Disable checkboxes after submitting
        });
        
        if (isCorrect && selectedOptions.length === questionData.correct.length) {
            resultDiv.textContent = 'Chính xác! 🎉';
            resultDiv.className = 'correct-answer';
        } else {
            resultDiv.textContent = 'Chưa chính xác. Vui lòng xem lại.';
            resultDiv.className = 'wrong-answer';
        }

        submitBtn.classList.add('hidden');
        nextQuestionBtn.classList.remove('hidden');
    }

    // Event listeners
    chapterSelect.addEventListener('change', (event) => {
        currentChapterIndex = parseInt(event.target.value);
        currentQuestionIndex = 0; // Reset question index when chapter changes
        if (currentChapterIndex >= 0) {
            quizSection.classList.remove('hidden');
            loadQuestion();
        } else {
            quizSection.classList.add('hidden');
        }
    });

    submitBtn.addEventListener('click', checkAnswer);

    nextQuestionBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        loadQuestion();
    });

    // Initial load
    loadChapters();
});