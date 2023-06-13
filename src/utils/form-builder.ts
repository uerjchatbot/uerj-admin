import { FormQuestion, RequestFormAPI } from "@/models/form";

export function formQuestionsBuilder(questions: FormQuestion[]): RequestFormAPI[] {
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
