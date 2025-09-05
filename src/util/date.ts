export const getToday = () => {
  const now = new Date();
  const seoul = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Seoul" })
  );
  const y = seoul.getFullYear();
  const m = String(seoul.getMonth() + 1).padStart(2, "0");
  const d = String(seoul.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};
