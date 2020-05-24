import { createCourse, Course } from '../models';

import { courseData } from './data';

class CourseService {
  /** GET cources from the server */
  public getCources = async (): Promise<Course[]> => {
    const snapshot = courseData;
    const arr: Course[] = [];
    snapshot.forEach(payload => {
      arr.push(createCourse(payload));
    });
    return arr;
  };

  // /** GET dictionary by id. */
  // public getDictionary = async (id: string): Promise<Dictionary> => {
  //   return withTrace(`getDictionary(${id})`, async () => {
  //     const dictionary = await this.getDictionaryById(id);
  //     const words = await this.getWords(id);
  //     const statistics = await this.getStatistics(id);
  //     const values = Object.values(words);
  //     values.forEach(word => {
  //       const stat = statistics[word.id];
  //       if (stat) {
  //         /* eslint-disable no-param-reassign */
  //         word.isCompleted = stat.isCompleted;
  //         word.occurs = stat.occurs;
  //         word.mistakes = stat.mistakes;
  //         /* eslint-enable no-param-reassign */
  //       }
  //     });
  //     // console.table(words);

  //     // fix wordsCompleted
  //     const wordsCompleted = count(values, w => w.isCompleted);
  //     if (dictionary.wordsCompleted !== wordsCompleted) {
  //       dictionary.wordsCompleted = wordsCompleted;
  //     }
  //     return { ...dictionary, words };
  //   });
  // };

  // private async getDictionaryById(id: string): Promise<Dictionary> {
  //   return withTrace('getDictionaryById', async () => {
  //     const snapshot = await this.db.ref(`dictionary/${id}`).once('value');
  //     return createDictionary(snapshot, this.uid);
  //   });
  // }

  // private async getWords(dictionaryId: string): Promise<Record<string, Word>> {
  //   return withTrace('getWords', async () => {
  //     const snapshot = await this.db.ref('word').orderByChild('dictionaryId').equalTo(dictionaryId).once('value');
  //     const map: Record<string, Word> = {};
  //     snapshot.forEach(payload => {
  //       map[payload.key as string] = createWord(payload);
  //     });
  //     return map;
  //   });
  // }

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
