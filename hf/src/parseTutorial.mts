export function parseTutorial(text: string): Array<{ filename: string; content: string }> {
  const result: { filename: string; content: string; }[] = [];
  const regex = /#\s+(?:And finally,\s+)?in\s+(?:(?:the|your)\s+)?(.*)(?:, add the following code)?:\n```(?:\w+\n)?([\s\S]*?)```/gi;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
      result.push({
          filename: match[1],
          content: match[2].trim(),
      });
  }
  return result;
}