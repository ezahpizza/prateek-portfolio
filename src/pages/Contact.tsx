import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import { Mail, Loader2, CheckCircle, Phone, User } from "lucide-react";
import Footer from "../components/Footer";

const Contact = () => {

const WEB3FORMS_API_KEY = import.meta.env.VITE_WEB3FORMS_API_KEY as string;
  if (!WEB3FORMS_API_KEY) {
    console.error('WEB3FORMS_API_KEY is not defined');
    return <div>Error: WEB3FORMS_API_KEY is not defined</div>;
  }

  // Form data state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    
    // Form submission states
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");
    
    // Animation states (matching Index.tsx pattern)
    const [navFooterVisible, setNavFooterVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [headingVisible, setHeadingVisible] = useState(false);
    const [paragraphVisible, setParagraphVisible] = useState(false);

    useEffect(() => {
        // Sequential animation with timings (similar to Index.tsx)
        const animationSequence = async () => {
        // Start with navbar and footer
        setTimeout(() => setNavFooterVisible(true), 100);
        
        // Content sequence
        setTimeout(() => setHeadingVisible(true), 800);
        setTimeout(() => setParagraphVisible(true), 1000);
        setTimeout(() => setFormVisible(true), 1200);
        };

        animationSequence();
    }, []);

    // Form input handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
        const data = {
            access_key: WEB3FORMS_API_KEY,
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
            setIsSuccess(true);
            Swal.fire({
            title: "Message Sent!",
            text: "I'll get back to you soon.",
            icon: "success",
            background: "#2D3748", // Dark background
            color: "#F7FAFC", // Light text
            confirmButtonColor: "#9061F9", // Purple button
            });
            setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            });
            setTimeout(() => {
            setIsSuccess(false);
            }, 5000);
        } else {
            setError("Something went wrong. Please try again.");
        }
        } catch (err) {
        setError("Failed to submit form. Please try again later.");
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <div className="h-screen w-full bg-custom-steelGray flex flex-col relative overflow-hidden">
        <Navbar 
            className={`transform transition-transform duration-700 ease-out ${navFooterVisible ? 'translate-y-0' : '-translate-y-full'}`} 
        />

        <main className="flex-grow flex flex-col md:flex-row z-10 min-h-0">
            {/* LEFT SECTION - Contact Description */}
            <div className="w-full md:w-2/5 flex items-center md:justify-start px-4 md:pl-8 md:pr-12 pt-24 pb-8 md:pt-0 md:pb-0 min-h-0">
            <div className="space-y-4 md:border-t md:pt-4 md:border-l md:pl-4 border-custom-purplePop max-w-3xl">
                <h1 
                className={`text-3xl sm:text-4xl md:text-5xl text-custom-lightGray transform transition-all duration-500 ease-out leading-tight ${
                    headingVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                }`}
                >
                Let's Connect
                </h1>
                <p 
                className={`text-lg sm:text-xl md:text-2xl text-custom-gray transform transition-all duration-500 ease-out leading-relaxed ${
                    paragraphVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                }`}
                >
                Feel free to reach out for collaborations or just to say hi.
                </p>
            </div>
            </div>

            {/* RIGHT SECTION - Contact Form */}
            <div 
            className={`w-full md:w-3/5 flex items-center justify-center transform transition-all duration-500 ease-out min-h-0 ${
                formVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
            >
            <div className="w-full max-w-2xl px-4 md:px-8 py-4 md:py-0">
                {error && (
                <div className="mb-4 p-3 bg-red-900/30 text-red-300 rounded-lg text-sm">
                    {error}
                </div>
                )}

                {isSuccess && (
                <div className="mb-4 p-3 bg-green-900/30 text-green-300 rounded-lg text-sm flex items-center gap-2">
                    <CheckCircle size={20} />
                    Message sent successfully!
                </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-custom-gray" size={18} />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-2.5 md:py-3 rounded-lg border border-custom-purplePop bg-custom-steelGray/50 text-custom-lightGray placeholder-custom-gray focus:ring-2 focus:ring-custom-purplePop focus:border-transparent outline-none text-sm md:text-base"
                        required
                        disabled={isLoading}
                    />
                    </div>
                    
                    <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-custom-gray" size={18} />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-2.5 md:py-3 rounded-lg border border-custom-purplePop bg-custom-steelGray/50 text-custom-lightGray placeholder-custom-gray focus:ring-2 focus:ring-custom-purplePop focus:border-transparent outline-none text-sm md:text-base"
                        required
                        disabled={isLoading}
                    />
                    </div>
                </div>

                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-custom-gray" size={18} />
                    <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-2.5 md:py-3 rounded-lg border border-custom-purplePop bg-custom-steelGray/50 text-custom-lightGray placeholder-custom-gray focus:ring-2 focus:ring-custom-purplePop focus:border-transparent outline-none text-sm md:text-base"
                    required
                    disabled={isLoading}
                    />
                </div>

                <div className="flex gap-2">
                    <select 
                    className="px-3 py-2.5 md:py-3 rounded-lg border border-custom-purplePop bg-custom-steelGray/50 text-custom-lightGray focus:ring-2 focus:ring-custom-purplePop focus:border-transparent outline-none text-sm md:text-base"
                    disabled={isLoading}
                    >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+62">+62</option>
                    <option value="+61">+61</option>
                    <option value="+86">+86</option>
                    <option value="+81">+81</option>
                    <option value="+82">+82</option>
                    <option value="+65">+65</option>
                    <option value="+60">+60</option>
                    <option value="+64">+64</option>
                    <option value="+55">+55</option>
                    <option value="+52">+52</option>
                    <option value="+33">+33</option>
                    <option value="+49">+49</option>
                    <option value="+39">+39</option>
                    <option value="+34">+34</option>
                    </select>
                    
                    <div className="relative flex-1">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-custom-gray" size={18} />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-2.5 md:py-3 rounded-lg border border-custom-purplePop bg-custom-steelGray/50 text-custom-lightGray placeholder-custom-gray focus:ring-2 focus:ring-custom-purplePop focus:border-transparent outline-none text-sm md:text-base"
                        required
                        disabled={isLoading}
                    />
                    </div>
                </div>

                <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-custom-purplePop bg-custom-steelGray/50 text-custom-lightGray placeholder-custom-gray focus:ring-2 focus:ring-custom-purplePop focus:border-transparent outline-none resize-none text-sm md:text-base"
                    required
                    disabled={isLoading}
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-custom-hotRed text-white py-2.5 md:py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative text-sm md:text-base"
                >
                    {isLoading ? (
                    <>
                        <Loader2 size={20} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
                        <span className="opacity-0">Send Message</span>
                    </>
                    ) : (
                    "Send Message"
                    )}
                </button>
                </form>
            </div>
            </div>
        </main>

        <Footer 
            className={`transform transition-transform duration-700 ease-out ${navFooterVisible ? 'translate-y-0' : 'translate-y-full'}`} 
        />
        </div>
    );
};

export default Contact;