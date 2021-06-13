import { getQuestionsRepo, Questions } from "../db/questions.entity";

// save new question to database
export async function createQuestion(hint: string, url : string, score : number ): Promise<Questions> {
    const newQuestion = new Questions()
    newQuestion.hint = hint
    newQuestion.imageURL = url
    newQuestion.correctScore = score

    const savedQuestion = await getQuestionsRepo().save(newQuestion)
    return savedQuestion
}

//get question 
export async function getQuestions() {
    const Questions = await getQuestionsRepo().find({ select: ["hint", "imageURL", "correctScore"]})
    // TODO: random 6/9 questions from the array
    return Questions
}

