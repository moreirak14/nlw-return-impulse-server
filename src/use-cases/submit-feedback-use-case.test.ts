import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe("Submit feedback", () => {
    it("should be able to submit a feedback", async () => {
        expect(submitFeedback.execute({
            type: "BUG",
            comment: "example comment",
            screenshot: "data:image/png;base64,154654da35sd4a564s",
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        // expect(sendMailSpy).toHaveBeenCalled();
    });

    it("should not be able to submit feedback without type", async () => {
        expect(submitFeedback.execute({
            type: "",
            comment: "example comment",
            screenshot: "data:image/png;base64,154654da35sd4a564s",
        })).rejects.toThrow();
    });

    it("should not be able to submit feedback without comment", async () => {
        expect(submitFeedback.execute({
            type: "BUG",
            comment: "",
            screenshot: "data:image/png;base64,154654da35sd4a564s",
        })).rejects.toThrow();
    });

    it("should not be able to submit feedback with an invalid screenshot", async () => {
        expect(submitFeedback.execute({
            type: "BUG",
            comment: "ta bugado",
            screenshot: "test.jpeg",
        })).rejects.toThrow();
    });
});