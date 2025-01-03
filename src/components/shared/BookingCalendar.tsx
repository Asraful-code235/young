type BookingCalenderProps = {
  text?: string;
};

export const BookingCalender = ({ text }: BookingCalenderProps) => {
  return (
    <div className="space-y-4 h-full">
      <h2 className="text-center ~text-2xl/4xl font-bold text-black">
        {text ? (
          text
        ) : (
          <>
            Book Your <span className="text-primary">Free 15-Minute</span>{" "}
            Consultation
          </>
        )}
      </h2>
      <p className="text-center text-gray-600">
        See how our therapy services can help your child and family.
      </p>
      <div className="flex justify-center h-full bg-transparent overflowScrollbar">
        <iframe
          src="https://calendly.com/youngsproutstherapy/15-minute-consult?month=2024-07"
          width="60%"
          frameBorder="0"
          className="min-h-screen h-full border-0 rounded-lg w-full "
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
