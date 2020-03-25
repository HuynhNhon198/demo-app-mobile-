// export interface IQuestion {
//     type: typeQuestion;
//     question: string;
//     answers: {
//         answer: string;
//         correct?: boolean;
//     }[];
// }

// enum typeQuestion {
//     quiz,
//     text,
// }

export function getDataQuestion() {
    return [
        {
            grade: '1',
            name: 'Lớp Một',
            questions: [
                {
                    type: 'quiz',
                    question: '1 + 1 bằng mấy ?',
                    answers: [
                        {
                            answer: '3',
                        },
                        {
                            answer: '4',
                        },
                        {
                            answer: '2',
                            correct: true
                        },
                        {
                            answer: '1',
                        }
                    ]
                },
                {
                    type: 'quiz',
                    question: '5 - 2 bằng mấy ?',
                    answers: [
                        {
                            answer: '3',
                            correct: true
                        },
                        {
                            answer: '4',
                        },
                        {
                            answer: '2',
                        },
                        {
                            answer: '1',
                        }
                    ]
                },
                {
                    type: 'text',
                    question: 'Con gì có vòi như con voi',
                    answers: [
                        {
                            answer: 'con voi'
                        },
                    ]
                }
            ]
        },
        {
            grade: '2',
            name: 'Lớp Hai',
            questions: [
                {
                    type: 'quiz',
                    question: '1 + 1 bằng mấy ?',
                    answers: [
                        {
                            answer: '3',
                        },
                        {
                            answer: '4',
                        },
                        {
                            answer: '2',
                            correct: true
                        },
                        {
                            answer: '1',
                        }
                    ]
                },
                {
                    type: 'quiz',
                    question: '5 + 2 bằng mấy ?',
                    answers: [
                        {
                            answer: '3',
                            correct: true
                        },
                        {
                            answer: '4',
                        },
                        {
                            answer: '2',
                        },
                        {
                            answer: '1',
                        }
                    ]
                },
                {
                    type: 'text',
                    question: 'Con gì có vòi như con voi',
                    answers: [
                        {
                            answer: 'con voi'
                        },
                    ]
                }
            ]
        }
    ]
}
