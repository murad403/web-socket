"use client";

import useWebSocket from "@/app/hooks/useWebSocket";
import users from "@/app/libs/User";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import { VscSend } from "react-icons/vsc";

const UserMessage = () => {
    const { userId } = useParams();
    const currentTargetUser = users.find(user => user.id === userId);
    console.log(currentTargetUser);
    const router = useRouter();
    const { messages, sendMessage } = useWebSocket();

    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.target as HTMLFormElement);
        const message = form.get("message") as string;
        // console.log("message from me", message);
        sendMessage(message);
        e.currentTarget.reset();
    }
    return (
        <div className='flex justify-center items-center h-screen bg-gray-200'>
            <div className='w-1/3 h-[70%] bg-white rounded-xl p-5 overflow-y-auto relative flex flex-col'>

                {/* Back Button */}
                <button onClick={() => router.back()} className="hover:text-blue-500 cursor-pointer mb-4">
                    <IoMdArrowBack size={25} />
                </button>

                {/* Chat Messages Area (takes available space) */}
                <div className="flex-1 overflow-y-auto pr-2">
                    <div className="flex items-start gap-3 mb-6">
                        <Image
                            alt="target user"
                            src={currentTargetUser?.image}
                            className="size-10 rounded-full border-2 border-blue-500 p-px flex-shrink-0"
                            width={500}
                            height={500}
                        />
                        <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-xs lg:max-w-md">
                            <p className="text-sm text-gray-800 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, fugiat consectetur, sint reprehenderit illo veniam iusto doloribus et saepe magnam beatae voluptatum repellendus! Blanditiis suscipit, earum laborum odio ullam, itaque quis reiciendis distinctio, fugiat non modi amet doloremque. Dignissimos quod qui voluptatem? Dolores, ex consectetur rerum eos harum nemo perspiciatis quod suscipit eum numquam repudiandae quaerat vitae facere atque cum et nisi provident alias nobis, repellendus itaque. Doloremque, velit. Quae repellat ipsum, ipsa itaque amet ab illo. Maxime quae ea voluptatem, sunt molestias rerum. Nam ab doloremque obcaecati odio inventore nobis ullam odit expedita aut, dolorum aliquam excepturi autem cupiditate nesciunt temporibus ut reprehenderit quae officia rerum minima totam iure earum veritatis necessitatibus. Nostrum deserunt eligendi, atque vitae recusandae quos repellat. Ab sapiente, et sequi at ipsa totam accusantium harum, illo accusamus, eveniet error earum. Corrupti, voluptatum harum. Temporibus, blanditiis. Officia nemo ullam ad magnam nam! Dicta autem cumque tempore ex commodi labore rerum tempora possimus perferendis suscipit praesentium iure, impedit quo soluta doloribus mollitia dolor, tenetur ducimus necessitatibus distinctio. Praesentium quis ducimus labore repellendus voluptas dicta minima adipisci neque numquam fuga officiis commodi libero sequi rerum obcaecati perferendis at nobis eum, quam odit. Deserunt sunt ipsum sint, hic voluptatem iure beatae vel possimus eius. Eaque natus eum, alias minus vel possimus vero voluptatibus, iure tempore amet laborum commodi illum facilis veritatis fugit eveniet dolores nisi, repudiandae quisquam voluptatum sequi. Cumque saepe iusto aliquid tempora obcaecati debitis quisquam deserunt esse autem ea deleniti earum inventore, quam fuga officiis architecto non vitae odit ducimus harum voluptatibus. Neque, perspiciatis voluptatum excepturi asperiores cumque ut vero iusto natus numquam iure sed consequuntur odit temporibus nam voluptas error, ipsum optio. Assumenda cupiditate earum dicta magnam laborum totam quibusdam culpa, odio reiciendis cum atque similique in dolor debitis mollitia vel accusamus. Corrupti natus vitae est perspiciatis voluptatibus vero ex delectus quibusdam numquam quas. Quo autem, nulla dignissimos voluptatibus voluptates porro obcaecati vel culpa facere laborum ratione quam deserunt aliquam saepe hic voluptatum recusandae omnis corrupti quia unde sit laboriosam nisi quisquam? Vitae possimus inventore quidem labore eaque! Voluptatibus ratione mollitia recusandae, enim iure cupiditate blanditiis unde dolorem in temporibus doloribus tenetur et esse laboriosam aliquid. Nobis similique iste magni deleniti, non iure deserunt magnam earum debitis officiis voluptatum veniam inventore eum accusantium soluta assumenda, minima laboriosam asperiores. Excepturi, et ipsum? Hic, placeat! Dolor voluptas quos illum nobis quo quae debitis placeat et nesciunt saepe quas, itaque voluptates? Sint facilis laudantium officia. Ratione iure non nobis impedit totam id tempore blanditiis quia magnam, ipsam ab explicabo sint ut eveniet numquam dolore laudantium beatae sapiente? Perspiciatis dolores id aperiam veritatis numquam, labore debitis amet molestias provident tempora reprehenderit suscipit fugit a facilis vitae repudiandae libero, deleniti quas nostrum dignissimos esse? Perferendis non nihil provident, aperiam quo cum natus laudantium quas eveniet deserunt aut a, expedita repellat atque incidunt, dicta accusamus eum aspernatur quis laborum. Accusantium perferendis voluptas consequuntur tempore perspiciatis quas quos quidem alias amet labore, dolor expedita, quia modi voluptatibus, aut earum distinctio corporis officia pariatur. adipisicing elit. Magnam, molestias doloremque sit accusantium...
                                {/* your long text */}
                            </p>
                        </div>
                    </div>
                    {/* Add more messages here */}
                </div>

                {/* Input Form — STICKY at the bottom */}
                <div className="sticky bottom-0 left-0 right-0 bg-white pt-4 -mx-5 px-5 pb-5 border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="relative">
                        <input
                            name="message"
                            type="text"
                            autoComplete="off"
                            className="w-full py-3 px-5 pr-12 outline-none border border-blue-500 rounded-full text-sm placeholder-gray-500 focus:border-blue-600 transition"
                            placeholder="Enter your message..."
                        />
                        <button
                            type="submit"
                            className="absolute right-1 top-1/2 -translate-y-1/2 p-2 hover:bg-blue-50 rounded-full transition"
                        >
                            <VscSend size={22} className="text-blue-600" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserMessage
