import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "../styles/ReusableStyles";
const data = [
  { data: 45 },
  {
    data: 50,
  },
  {
    data: 47,
  },
  {
    data: 44,
  },
  {
    data: 48,
  },
  {
    data: 53,
  },
  {
    data: 58,
  },
  {
    data: 60,
  },
  {
    data: 63,
  },
  {
    data: 65,
  },
  {
    data: 67,
  },
  {
    data: 66,
  },
  {
    data: 65,
  },
  {
    data: 63,
  },
  {
    data: 59,
  },
  {
    data: 57,
  },
  {
    data: 55,
  },
  {
    data: 53,
  },
  {
    data: 51,
  },
  {
    data: 50,
  },
  {
    data: 53,
  },
  {
    data: 58,
  },
  {
    data: 60,
  },
  {
    data: 63,
  },
  {
    data: 67,
  },
  {
    data: 65,
  },
  {
    data: 63,
  },
  {
    data: 65,
  },
  {
    data: 67,
  },
  {
    data: 70,
  },
  {
    data: 73,
  },
  {
    data: 75,
  },
  {
    data: 77,
  },
  {
    data: 80,
  },
  {
    data: 81,
  },
  {
    data: 79,
  },

  {
    data: 77,
  },
  {
    data: 75,
  },
  {
    data: 73,
  },
  {
    data: 70,
  },
  {
    data: 67,
  },
  {
    data: 65,
  },
  {
    data: 63,
  },
  {
    data: 65,
  },
  {
    data: 67,
  },
  {
    data: 63,
  },
  {
    data: 60,
  },
  {
    data: 58,
  },

  {
    data: 54,
  },
  {
    data: 60,
  },
  {
    data: 80,
  },
];
export default function Earnings() {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h5>Rezerwacje w tym miesiącu</h5>
          <h1>68</h1>
          <div className="growth">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#ffc107"
              fill="#8068233e"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;
