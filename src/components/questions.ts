interface Answer {
    text: string,
    type: string;
}

interface Question {
    question: string,
    answers: Answer[];
}

export const questions: Question[] = [
    {
        question: 'When faced with a difficult problem, you are more likely to:',
        answers: [
            {text: 'Rely on your feelings and values to guide you', type: 'Fi'},
            {text: 'Analyze the problem logically and systematically', type: 'Ti'},
            {text: 'Consider the impact of the decision on others', type: 'Fe'},
            {text: 'See practical applications for the information', type: 'Te'}
        ]
    },
    {
        question: 'When learning something new, you prefer to:',
        answers: [
            {text: 'Understand the underlying principles and theories', type: 'Ni'},
            {text: 'Rely on proven methods and past experiences', type: 'Si'},
            {text: 'Explore different ideas and possibilities', type: 'Ne'},
            {text: 'Learn from hands-on experience', type: 'Se'}
        ]
    },
    {
        question: 'In a discussion, you are more likely to:',
        answers: [
            {text: 'Share your own personal values and feelings', type: 'Fi'},
            {text: 'Listen to others and create harmony', type: 'Fe'},
            {text: 'Organize and structure the discussion efficiently', type: 'Te'},
            {text: 'Analyze the information logically', type: 'Ti'}
        ]
    },
    {
        question: 'When working on a project, you:',
        answers: [
            {text: 'Pay attention to details and ensure accuracy', type: 'Si'},
            {text: 'Enjoy brainstorming and coming up with innovative ideas', type: 'Ne'},
            {text: 'Focus on the long-term vision and underlying patterns', type: 'Ni'},
            {text: 'Engage actively with the present moment and adapt to immediate needs', type: 'Se'}
        ]
    },
    {
        question: 'When making plans for the weekend, you prefer to:',
        answers: [
            {text: 'Do whatever feels right at the moment', type: 'Fi'},
            {text: 'Consider what will make everyone happy', type: 'Fe'},
            {text: 'Make a detailed plan and stick to it', type: 'Te'},
            {text: 'Analyze the options and choose the most logical one', type: 'Ti'}
        ]
    },
    {
        question: 'When meeting new people, you:',
        answers: [
            {text: 'Enjoy getting to know them on a deep level', type: 'Ni'},
            {text: 'Are excited to explore new ideas and possibilities with them', type: 'Ne'},
            {text: 'Prefer to keep the conversation light and fun', type: 'Se'},
            {text: 'Focus on familiar topics and shared experiences', type: 'Si'}
        ]
    },
    {
        question: 'In your free time, you prefer to:',
        answers: [
            {text: 'Reflect on your values and feelings', type: 'Fi'},
            {text: 'Engage in activities that challenge your thinking and problem-solving skills', type: 'Ti'},
            {text: 'Organize and achieve your goals efficiently', type: 'Te'},
            {text: 'Engage in activities that foster harmony and connection with others', type: 'Fe'}
        ]
    },
    {
        question: 'When working in a team, you:',
        answers: [
            {text: 'Focus on the long-term vision and underlying patterns', type: 'Ni'},
            {text: 'Come up with innovative ideas and solutions', type: 'Ne'},
            {text: 'Ensure tasks are completed with attention to detail and consistency', type: 'Si'},
            {text: 'Take initiative and respond quickly to immediate needs', type: 'Se'}
        ]
    },
    {
        question: 'When faced with a change, you:',
        answers: [
            {text: 'Consider how the project aligns with your personal values', type: 'Fi'},
            {text: 'Think about how the project will impact others and strive for harmony', type: 'Fe'},
            {text: 'Analyze the project logically to find the best approach', type: 'Ti'},
            {text: 'Organize and plan the steps needed to complete the project efficiently', type: 'Te'}
        ]
    },
    {
        question: 'When dealing with a conflict, you:',
        answers: [
            {text: 'Reflect on the underlying patterns and long-term implications', type: 'Ni'},
            {text: 'Explore various possibilities and potential solutions', type: 'Ne'},
            {text: 'Address the issue directly and take immediate action', type: 'Se'},
            {text: 'Rely on past experiences to guide your response', type: 'Si'}
        ]
    },
    {
        question: 'When receiving feedback, you:',
        answers: [
            {text: 'Analyze the feedback to understand the logic behind it', type: 'Ti'},
            {text: 'Use the feedback to create a plan for improvement', type: 'Te'},
            {text: 'Reflect on how the feedback aligns with your personal values', type: 'Fi'},
            {text: 'Consider the emotional impact of the feedback on yourself and others', type: 'Fe'}
        ]
    },
    {
        question: 'When you are stressed, you:',
        answers: [
            {text: 'Reflect on the deeper meaning and long-term implications', type: 'Ni'},
            {text: 'Brainstorm various possibilities and potential solutions', type: 'Ne'},
            {text: 'Rely on familiar routines and past experiences to cope', type: 'Si'},
            {text: 'Engage in physical activities to stay grounded in the present', type: 'Se'}
        ]
    },
    {
        question: 'When planning a vacation, you:',
        answers: [
            {text: 'Choose destinations that resonate with your personal interests and values', type: 'Fi'},
            {text: 'Consider how the trip will create enjoyable experiences for everyone involved', type: 'Fe'},
            {text: 'Research and analyze the best options to maximize the experience', type: 'Ti'},
            {text: 'Organize the itinerary and logistics to ensure everything runs smoothly', type: 'Te'}
        ]
    },
    {
        question: 'When faced with a new challenge, you:',
        answers: [
            {text: 'Envision the long-term impact and future possibilities', type: 'Ni'},
            {text: 'Generate multiple ideas and approaches to tackle it', type: 'Ne'},
            {text: 'Rely on familiar strategies and past experiences', type: 'Si'},
            {text: 'Take immediate action and adjust as you go', type: 'Se'}
        ]
    },
    {
        question: 'When organizing an event, you:',
        answers: [
            {text: 'Ensure the event reflects your personal values and interests', type: 'Fi'},
            {text: 'Create a detailed plan and delegate tasks to ensure efficiency', type: 'Te'},
            {text: 'Analyze all aspects to ensure everything runs smoothly', type: 'Ti'},
            {text: 'Focus on making sure everyone feels welcome and included', type: 'Fe'}
        ]
    }
]
