/* eslint-disable class-methods-use-this */
import { Course, createCourse, Module, createModule } from '../models';
import { courseData, moduleData } from '../database/data';

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
    const modules = await this.getModules(id);
    // const statistics = await this.getStatistics(id);
    // const values = Object.values(modules);
    // values.forEach(module => {
    //   const stat = statistics[module.id];
    //   if (stat) {
    //     /* eslint-disable no-param-reassign */
    //     module.isCompleted = stat.isCompleted;
    //     module.occurs = stat.occurs;
    //     module.mistakes = stat.mistakes;
    //     /* eslint-enable no-param-reassign */
    //   }
    // });
    // // console.table(words);

    // // fix wordsCompleted
    // const wordsCompleted = count(values, w => w.isCompleted);
    // if (dictionary.wordsCompleted !== wordsCompleted) {
    //   dictionary.wordsCompleted = wordsCompleted;
    // }
    return { ...course, modules };
  };

  private async getCourseById(id: string): Promise<Course> {
    const snapshot = courseData.find(x => x.key === id);
    return createCourse(snapshot);
  }

  private async getModules(courseId: string): Promise<Record<string, Module>> {
    const snapshot = moduleData.filter(x => x.courseId === courseId);
    const modules: Record<string, Module> = {};
    snapshot.forEach(payload => {
      const module = createModule(payload);
      modules[module.id] = module;
    });
    return modules;
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
