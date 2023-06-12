import { FormQuestion, OptionsFormAPI, RequestFormAPI } from "@/models/form";

export function formQuestionsBuilder(questions: FormQuestion[]): RequestFormAPI[] {
  return questions.map(({ title, type, options }, index) => ({
    createItem: {
      item: {
        title,
        // description,
        questionItem: {
          question: {
            choiceQuestion: {
              options: options?.map((item) => ({
                value: item
              })) as OptionsFormAPI[],
              type
            }
          }
        }
      },
      location: { index }
    }
  }));
}
