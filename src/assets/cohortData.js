export default {
	data() {
		return {
			participants: 364,
			weekOfMonth: "2nd",
			schoolYear: "2023-2024",
			assistantCoaches: [
                {
                    id: 1,
                    days: "Wednesday",
                    name: "Lindsay Klatzkin"
                },
                {
                    id: 2,
                    days: "Sunday",
                    name: "Sarah Karpel"
                },
                {
                    id: 2,
                    days: "Thursday",
                    name: "Amanda Mooney"
                }
			],
			numCohorts: 4,
			cohortDates: [
				{
					cohort: 1,
					name: "JavaScript, Intermediate to Advanced Coders",
					when: "Sundays @ 1:00 PM - 2:30 PM",
					dates: ["9-10-2023", "10-8-2023", "11-12-2023", "12-10-2023", "1-14-2024", "2-4-2024", "3-10-2024", "4-14-2024", "5-12-2024"],
				},
				{
					cohort: 2,
					name: "Python, Beginner Coders",
					when: "Sundays @ 3:00 PM - 4:30 PM",
					dates: ["9-10-2023", "10-8-2023", "11-12-2023", "12-10-2023", "1-14-2024", "2-4-2024", "3-10-2024", "4-14-2024", "5-12-2024"],
				},
				{
					cohort: 3,
					name: "Python, All Experience Levels",
					when: "Wednesdays @ 4:00 PM - 5:30 PM",
					dates: ["9-13-2023", "10-11-2023", "11-8-2023", "12-13-2023", "1-10-2024", "2-7-2024", "3-13-2024", "4-10-2024", "5-8-2024"],
				},
                {
					cohort: 4,
					name: "JavaScript, All Experience Levels",
					when: "Thursdays @ 4:00 PM - 5:30 PM",
					dates: ["9-14-2023", "10-12-2023", "11-9-2023", "12-14-2023", "1-11-2024", "2-8-2024", "3-14-2024", "4-11-2024", "5-9-2024"],
				}
			],
		}
	}
}
