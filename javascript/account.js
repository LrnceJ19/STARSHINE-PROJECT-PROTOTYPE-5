export let idNum = 0;
export let username = ["admin", "buen", "tester"];
export let password = ["root", "password", "test"];

export function idNumIncrement(){
  idNum++;
}

export function resetIdNum(){
  idNum = 0;
}