export default async function fetchRandomTasks(
  setTasks,
  setIsLoading,
  setIsError
) {
  try {
    const res = await fetch("/api/randomTasks");
    const data = await res.json();
    setTasks(data);
    setIsLoading(false);
  } catch (error) {
    setIsError(true);
  }
}
