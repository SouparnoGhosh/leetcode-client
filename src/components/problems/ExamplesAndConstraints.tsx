export default function ExamplesAndConstraints() {
  return (
    <>
      <div className="mb-4 space-y-2">
        <p className="font-semibold">Example 1:</p>
        <pre className="mb-4 rounded-lg bg-muted p-2 overflow-x-auto max-w-full">
          Input: n = 3{"\n"}
          Output: ["((()))","(()())","(())()","()(())","()()()"]
        </pre>
      </div>
      <div className="mb-4 space-y-2">
        <p className="font-semibold">Example 2:</p>
        <pre className="mb-4 rounded-lg bg-muted p-2 overflow-x-auto max-w-full">
          Input: n = 1{"\n"}
          Output: ["()"]
        </pre>
      </div>
      <div className="space-y-2">
        <p className="font-semibold">Constraints:</p>
        <ul className="list-inside list-disc">
          <li>1 ≤ n ≤ 8</li>
        </ul>
      </div>
    </>
  );
}
