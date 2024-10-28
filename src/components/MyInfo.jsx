import { TfiDownload } from "react-icons/tfi";

function MyInfo() {
  return (
    <div id="my-info" className="fixed right-0 bottom-0 w-[57vw] h-[11.5vh] border-black border-[1px] bg-white box-border">
        <div id="box" className="flex flex-row h-full items-center">
            <div id="location" className="grow-[18.33]">
                <h6 className="ps-5">Location</h6>
                <p className="ps-5">Add Location Here</p>
            </div>
            <div id="email" className="grow-[18.33]">
                <h6>Email</h6>
                <p>tylerkolsen@gmail.com</p>
            </div>
            <div id="phone-number" className="grow-[18.33]">
                <h6>Phone Number</h6>
                <p>801-717-8791</p>
            </div>
            <a href="" className="grow-[45] flex flex-row justify-center items-center">
                <span><TfiDownload /></span>
                <p>&nbsp;Download CV</p>
            </a>
        </div>
    </div>
  )
}

export default MyInfo