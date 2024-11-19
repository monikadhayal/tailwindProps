import React from 'react';

function Card({username,position,myObj}){
  //console.log("props : ",props);
  console.log(username);
    return (
      <>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="https://images.pexels.com/photos/28858569/pexels-photo-28858569/free-photo-of-romantic-black-and-white-couple-portrait-by-river.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “ monika nbddjiwehfusbsvn xcmvnuidshfuigknsdkjherougodnjzdffhr98fv Tailwind CSS is the only framework that I've seen scale on
                large teams. Is easy to customize, adapts to any design, and the
                build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">{username}</div>

              <div class="text-slate-700 dark:text-slate-500">
                {position}
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                {myObj.age}
              </div>
              
            </figcaption>
          </div>
        </figure>
      </>
    );
}
export default Card