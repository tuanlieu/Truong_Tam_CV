import { motion } from "motion/react";
import { SubmitHandler, useForm } from "react-hook-form";
import ContactForm from "../types/ContactForm";
import DivideTag from "./DivideTag";
import Footer from "./Footer";
import PageTag from "./PageTag";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();
  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    console.log(data);
  };
  return (
    <motion.div
      className="bg-gray-200 w-full h-full pt-8"
      initial={{ opacity: 0, margin: "0px", textAlign: "left" }}
      animate={{ opacity: 1, margin: "auto", textAlign: "center" }}
      transition={{ duration: 1 }}
    >
      <div className="text-center w-3/4 m-auto bg-gray-200 pt-10">
        <PageTag title="Contact" color={0} />
        <p className="font-light tracking-wider text-base">
          I’m always excited to connect with like-minded individuals,
          collaborate on interesting projects, or discuss innovative ideas.
          Whether you have a question, a proposal, or just want to say hello,
          feel free to reach out! I believe great things happen through
          meaningful connections, and I look forward to hearing from you.
        </p>
        <DivideTag />
        <form
          className="max-w-md mx-auto text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              id="input_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer relative"
              placeholder=" "
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <span className="absolute right-0 top-1/3 text-sm font-light text-red-500">
                {errors.email.message}
              </span>
            )}
            <label
              htmlFor="input_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter your email
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="input_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer relative"
                placeholder=" "
                {...register("first_name", {
                  required: "First name is required",
                })}
              />
              {errors.first_name && (
                <span className="absolute right-0 top-1/3 text-sm font-light text-red-500">
                  {errors.first_name.message}
                </span>
              )}
              <label
                htmlFor="input_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="input_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer relative"
                placeholder=" "
                {...register("last_name", {
                  required: "Last name is required",
                })}
              />
              {errors.last_name && (
                <span className="absolute right-0 top-1/3 text-sm font-light text-red-500">
                  {errors.last_name.message}
                </span>
              )}
              <label
                htmlFor="input_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="input_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer relative"
                placeholder=" "
                {...register("phone_number", {
                  required: "Required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid",
                  },
                })}
              />
              {errors.phone_number && (
                <span className="absolute right-0 top-1/3 text-sm font-light text-red-500">
                  {errors.phone_number.message}
                </span>
              )}
              <label
                htmlFor="input_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (10digits)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="input_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer relative"
                placeholder=" "
                {...register("company", { required: "Required" })}
              />
              {errors.company && (
                <span className="absolute right-0 top-1/3 text-sm font-light text-red-500">
                  {errors.company.message}
                </span>
              )}
              <label
                htmlFor="input_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3409068975566!2d106.70181627508865!3d10.77198388937656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f41476fee6b%3A0x15de2e5129cc54f!2zVMOyYSBuaMOgIHTDoGkgY2jDrW5oIEJpdGV4Y28sIELhur9uIE5naMOpLCBRdeG6rW4gMSwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1737968115218!5m2!1svi!2s"
          className="w-1/2 h-96 m-auto py-8 mb-12"
        ></iframe>
        <div className="h-20"></div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
