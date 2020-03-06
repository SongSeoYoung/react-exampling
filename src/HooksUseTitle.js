import React, {useEffect, useState} from 'react';

const useTitle =(initialTitle) => {
  const [title, setTitle] = useState(initialTitle)
  const updateTitle =() => {
    const htmlTitle = document.querySelector("title")   //html에서 title이라는 태그를 얻어오는 것. 그 변수는 htmlTitle에 들어가게된ㄷ.
    htmlTitle.innerText = title;    //title태그가 있는 곳에다가 innerText즉 text를 넣는데 그 title이라는 것은 우리가 상태관리해주는 title을 말함. 즉 변경된 타이틀.
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}

const HooksUseTitle =() => {
  const titleUpdater = useTitle("Loading...")
  setTimeout(() => titleUpdater("Loading is Finish!"), 5000);
  return (
    <>
      <h1>useTitle Hooks</h1>
    </>
  )
}

export default HooksUseTitle