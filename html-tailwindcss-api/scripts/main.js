const cardWrapper = document.getElementById("userCardWrapper");
const userCount = document.getElementById("userCount");

async function getData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const responseD = await fetch(apiUrl);
  const data = await responseD.json();
  console.log(data);

  userCount.innerText = data.length;

  const users = data.map((each) => {
    const avatarLetter = each.username.slice(0, 1).toUpperCase();
    const { name, username, email, phone, website } = each;

    return `
            <div class="card bg-white rounded-[12px] p-5 flex flex-col sm:w-[80%] sm:mx-auto md:w-[45%] md:justify-between lg:w-[30%]">
            <div class="image-wrapper flex items-center justify-between">
            <div
              class="user_image flex justify-center items-center bg-orange-600 w-14 h-14 rounded-full font-bold text-[24px]"
            >
              ${avatarLetter}
            </div>
            <button
              class="follow bg-blue-950 text-white px-4 py-[4px] rounded-2xl text-sm"
            >
              follow
            </button>
          </div>

            <section class="profile my-2">
              <div class="name font-bold">${name}</div>
              <div class="username text-gray-500 text-sm">@${username}</div>
            </section>

            <section class="message my-3">
              Software Engineer @<span class="underline">${each.company.name}</span>
              <div>
              ${each.company.catchPhrase},
              ${each.company.bs}
              
              </div>
            </section>

            <section class="interactions text-[12px] text-gray-500">
              <span
                class="after:bg-black after:w-[6px] after:h-[6px] after:inline-block after:rounded-full after:mx-2 inline-flex items-center"
                >${email}
              </span>
              <span
                class="after:bg-black after:w-[6px] after:h-[6px] after:inline-block after:rounded-full after:mx-2 inline-flex items-center"
                >${phone}</span
              >
              <span class="inline-flex items-center">${website}</span>
            </section>
          </div>`;
  });

  cardWrapper.innerHTML = users;
}

window.addEventListener("DOMContentLoaded", () => {
  getData();
});
