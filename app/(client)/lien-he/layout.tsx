export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div className="w-full bg-bottom h-[30vh] bg-[url(https://firebasestorage.googleapis.com/v0/b/suanhacantho-3b53d.appspot.com/o/UI%2F4.jpg?alt=media&token=28fdc74f-2f48-4466-b8f8-5b0e3af81b2f)] bg-cover bg-no-repeat ">
          <div className="w-full h-[30vh] bg-[rgba(0,0,0,0.62)] text-white flex justify-center items-center">
            <h1 className="text-[30px] font-normal">Thông tin liên hệ</h1>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
