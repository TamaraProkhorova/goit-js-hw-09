refs = {
  form: document.querySelector('form'), 
  delay: document.getElementsByName('delay'), 
  step: document.getElementsByName('step'),
  amount: document.getElementsByName('amount'),
  btn: document.querySelector('button'),
 }

refs.btn.addEventListener("click", onSubmitBtn);

function onSubmitBtn(event) {
  event.preventDefault();
  let delay = 0;
  for (let i=1; i <= refs.amount; i+=1) {
  let position = i;
  delay = refs.delay + refs.step*(i-1);

  createPromise (position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
