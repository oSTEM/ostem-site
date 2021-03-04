import { CONFERENCE_START_TIME } from "@/config/conference";
import { TextSize } from "@/theme";
import { intervalToDuration } from "date-fns";
import React from "react";

export const ConferenceCountdown = ({
  currentTime,
}: {
  currentTime?: Date;
}) => {
  const computeDuration = React.useCallback(
    () =>
      intervalToDuration({
        start: new Date(),
        end: CONFERENCE_START_TIME,
      }),
    [],
  );
  const { months, weeks, days, hours, seconds } = useUpdateEverySecond(
    computeDuration,
  );

  return (
    <div className="conference-countdown">
      <DigitCountdown value={months || 0} unit={"months"} />
      <DigitCountdown value={weeks || 0} unit={"weeks"} />
      <DigitCountdown value={days || 0} unit={"days"} />
      <DigitCountdown value={hours || 0} unit={"hours"} />
      <DigitCountdown value={seconds || 0} unit={"seconds"} />
      <style jsx>{`
        .conference-countdown {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

const DigitCountdown = ({ value, unit }: { value: number; unit: string }) => {
  return (
    <div className="digit-countdown">
      <div className="value">{value}</div>
      <div className="unit">{unit}</div>
      <style jsx>{`
        .digit-countdown {
          padding: 1rem;
          display: grid;
          grid-template-rows: auto auto;
          grid-gap: 1rem;
          text-align: center;
        }

        .value {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: ${TextSize.T500};
          width: 2em;
        }
      `}</style>
    </div>
  );
};

function useUpdateEverySecond<T>(fn: () => T): T {
  const [value, setValue] = React.useState<T>(fn());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue(fn());
    }, 1000);
    return () => clearInterval(interval);
  }, [fn]);

  return value;
}
