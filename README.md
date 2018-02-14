# Workout-Generator
This program was inspired by the adoption of the 5-3-1 program as found on T-Naiton into my own fitness program. For more complete
information, I encourage you to check out the link below.

https://www.t-nation.com/workouts/531-how-to-build-pure-strength

While the interface and  onscreen prompts should give some direction as to how to use this application and what each page means, it was 
not the primary objective. An explanation of the workout will help in understanding how to use this application. 

The 5-3-1 program is built around the four large compound movements: the standing overhead press (sometimes called military press), 
the deadlift, the bench press, and the squat. Each of your four workouts for the week will be based around one of these exercises.

First, an individual must determine the maximum amount of weight at which they can still perform each exercise.Once you have your one rep 
max for each exercise, calculate 90% of that value. This is the value you will use in calculations to find what weights you should be 
using each week, for each set, for each exercise. I refer to this as the 'working max' and the code reflects that.

The calculations for the weights of each week and repetition schemes are as follows:

    for Week 1, all major exercises:
      ( working max * 65% ) 5 reps
      ( working max * 75%) 5 reps
      ( working max * 85%) 5 reps+
  
    for Week 2, all major exercises:
      ( working max * 70% ) 3 reps
      ( working max * 80%) 3 reps
      ( working max * 90%) 3 reps+
  
    for Week 3, all major exercises:
      ( working max * 75% ) 5 reps
      ( working max * 85%) 3 reps
      ( working max * 95%) 1 reps+
  
    for Week 4 (deload week), all major exercises:
      ( working max * 40% ) 5 reps
      ( working max * 50%) 5 reps
      ( working max * 60%) 5 reps

Anywhere a '+' is noted, one should do the appropriate exercise and weight for as many repetitions as possible with the preceding number
being the minimum goal.

After a month is completed, 5 pounds should be added to the one rep maxes of both the overhead press and the bench press while 10
pounds are added to the one rep maxes of the deadlift and squat. All calculations are then repeated on these numbers to derive the
weights to be used for the next month.