/* eslint-disable class-methods-use-this */
import { Course, createCourse, Lesson, createLesson } from '../models';
import { courseData, lessonData } from '../database/data';

class CourseService {
  /** GET cources from the server */
  public getCourses = async (): Promise<Course[]> => {
    const snapshot = courseData;
    const courses: Course[] = [];
    snapshot.forEach(payload => {
      courses.push(createCourse(payload));
    });
    return courses;
  };

  /** GET course by id. */
  public getCourse = async (id: string): Promise<Course> => {
    const course = await this.getCourseById(id);
    const lessons = await this.getLessons(id);
    // const statistics = await this.getStatistics(id);
    // const values = Object.values(lessons);
    // values.forEach(lesson => {
    //   const stat = statistics[lesson.id];
    //   if (stat) {
    //     /* eslint-disable no-param-reassign */
    //     lesson.isCompleted = stat.isCompleted;
    //     lesson.occurs = stat.occurs;
    //     lesson.mistakes = stat.mistakes;
    //     /* eslint-enable no-param-reassign */
    //   }
    // });
    // // console.table(words);

    // // fix wordsCompleted
    // const wordsCompleted = count(values, w => w.isCompleted);
    // if (dictionary.wordsCompleted !== wordsCompleted) {
    //   dictionary.wordsCompleted = wordsCompleted;
    // }
    return { ...course, lessons };
  };

  private async getCourseById(id: string): Promise<Course> {
    const snapshot = courseData.find(x => x.key === id);
    return createCourse(snapshot);
  }

  private async getLessons(courseId: string): Promise<Record<string, Lesson>> {
    const snapshot = lessonData.filter(x => x.courseId === courseId);
    const lessons: Record<string, Lesson> = {};
    snapshot.forEach(payload => {
      const lesson = createLesson(payload);
      lessons[lesson.id] = lesson;
    });
    return lessons;
  }

  // private async getStatistics(dictionaryId: string): Promise<Record<string, Statistic>> {
  //   return withTrace('getStatistics', async () => {
  //     const map: Record<string, Statistic> = {};
  //     if (this.uid) {
  //       const snapshot = await this.db.ref(`statistics/${this.uid}`).orderByChild('dictionaryId').equalTo(dictionaryId).once('value');
  //       snapshot.forEach(payload => {
  //         map[payload.key as string] = createStatistic(payload);
  //       });
  //     }
  //     return map;
  //   });
  // }
}

export default new CourseService();
