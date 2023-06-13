export function formQuestionsBuilder(questions) {
    return questions.map(({ title, type, options }, index) => ({
        createItem: {
            item: {
                title,
                // description,
                questionItem: {
                    question: {
                        choiceQuestion: {
                            options,
                            type
                        }
                    }
                }
            },
            location: { index }
        }
    }));
}
//# sourceMappingURL=form-builder.js.map