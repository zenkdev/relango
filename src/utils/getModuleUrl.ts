export default function getModuleUrl(courseId: string, moduleId?: string | null) {
  let url = `/course/${courseId}`;
  if (moduleId) {
    url += `/module/${moduleId}`;
  }
  return url;
}
