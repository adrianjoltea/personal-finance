import EmptyPage from "../components/Ui/EmptyPage";

export function dataStates<T>(
  data: T[] | undefined,
  loading: boolean,
  textNoData: string
) {
  if (loading) return <EmptyPage text="Loading..." />;
  if (!loading && data?.length === 0) return <EmptyPage text={textNoData} />;

  return null;
}
