import { useTina } from "tinacms/dist/react";

export const MyComponent = (props) => {
  const { data } = useTina(props);

  return (
    <pre style={{ margin: "100px auto", width: "1000px" }}>
      {JSON.stringify(data?.post?.body, null, 2)}
    </pre>
  );
};
