<?php get_header(); ?>
    <main class="quiz">

        <section class="section quiz__intro" id="introContainer">

            <h1>Hey there, pick a category to get started:</h1>

        </section>

        <section class="section quiz__container inactive" id="quizContainer">

            <div class="quiz__question" id="questionContainer">
            </div>

            <div class="quiz__buttons" id="answerContainer">
                <button class="btn" id="quizButtonOne" data-answer="1"></button>
                <button class="btn" id="quizButtonTwo" data-answer="2"></button>
                <button class="btn" id="quizButtonThree" data-answer="3"></button>
                <button class="btn" id="quizButtonFour" data-answer="4"></button>
            </div>

        </section>

        <section class="quiz__outro inactive" id="outroContainer">
            <h3 class="h2">You scored: <span id="scoreTotal"></span> out of <span id="scorePoss"></span></h3>
            <button class="btn" id="quizButtonRestart">Start again?</button>
        </section>

    </main>

    <script src="<?php echo get_template_directory_uri(); ?>/js/script.js" async defer></script>
</body>
</html>