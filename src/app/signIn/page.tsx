import React from 'react';

const Page = () => {
    return (
        <main className="relative flex justify-center items-center w-full h-[100vh]">
            <form className="relative w-[40%] h-[450px]">
                <div className="relative grid justify-items-center grid-rows-[8] grid-cols-1 gap-y-[20px] w-full h-full">
                    <h2 className="text-[#120154] text-[2.375rem] text-center font-bold">Войдите в Agora</h2>

                    <p className="text-[#120154] text-[1.375rem] text-center font-medium">Мы рекомендуем использовать рабочую почту</p>

                    <button type="button" className="flex justify-center items-center row-span-2 mx-[15%] w-[70%] h-[50px] border-[2px] border-[#120154] rounded-[5px] text-[#120154] text-[1.25rem] font-bold">Продолжить с Google</button>

                    <p className="text-[#120154] text-[1.25rem] font-bold">ИЛИ</p>

                    <input type="text" placeholder="work-email@gmail.com" className="relative mx-[15%] px-[15px] w-[70%] h-[50px] border-[2px] border-[#120154] rounded-[5px] placeholder:text-[#120154]"/>

                    <input type="password" placeholder="Введите пароль" className="relative mx-[15%] px-[15px] w-[70%] h-[50px] border-[2px] border-[#120154] rounded-[5px] placeholder:text-[#120154]"/>

                    <button type="button" className="flex justify-center items-center mx-[15%] w-[70%] h-[50px] bg-[#42a5f5] rounded-[5px] text-[#e3f2fd] text-[1.25rem] font-bold">Войти</button>
                </div>
            </form>
        </main>
    );
};

export default Page;