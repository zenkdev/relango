import { courseData, moduleData } from '../database/data';
import { Course, createCourse, createModule, Module } from '../models';

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
}

export default new CourseService();
