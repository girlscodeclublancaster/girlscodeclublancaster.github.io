export default {
	data() {
		return {
			participants: 292,
			weekOfMonth: "3rd",
			schoolYear: "2022-2023",
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
        }
			],
			numCohorts: 3,
			cohortDates: [
				{
					cohort: 1,
					name: "Intermediate to Advanced Coders",
					when: "Sundays @ 1:00 PM - 2:30 PM",
					dates: ["9-18-2022", "10-23-2022", "11-20-2022", "12-11-2022", "1-15-2023", "2-12-2023", "3-12-2023", "4-16-2023", "5-14-2023"],
				},
				{
					cohort: 2,
					name: "Beginner Coders",
					when: "Sundays @ 1:00 PM - 2:30 PM",
					dates: ["9-18-2022", "10-23-2022", "11-20-2022", "12-11-2022", "1-15-2023", "2-12-2023", "3-12-2023", "4-16-2023", "5-14-2023"],
				},
				{
					cohort: 3,
					name: "All Experience Levels",
					when: "Sundays @ 1:00 PM - 2:30 PM",
					dates: ["9-21-2022", "10-19-2022", "11-16-2022", "12-14-2022", "1-18-2023", "2-15-2023", "3-15-2023", "4-19-2023", "5-17-2023"],
				}
			],
		}
	}
}
