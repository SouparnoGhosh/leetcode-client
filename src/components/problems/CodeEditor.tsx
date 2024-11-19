import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

export default function CodeEditor({
    code,
    onCodeChange,
  }: {
    code: string;
    onCodeChange: (value: string | undefined) => void;
  }) {
    return (
      <AceEditor
        mode="java"
        theme="monokai"
        value={code}
        onChange={onCodeChange}
        name="ace-code-editor"
        width="100%"
        height="100%"
        fontSize={14}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        wrapEnabled={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
  
  