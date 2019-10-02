/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */
function upper(match) {
  return match.toUpperCase()
}

export default function correctSentence(text) {
  text = text.replace(/(^\w)/, upper)
  if (!text.endsWith('.')) {
    text += '.'
  }
  return text
}
