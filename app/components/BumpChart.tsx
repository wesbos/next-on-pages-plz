"use client";
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bump
import { ResponsiveBump } from '@nivo/bump'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    "id": "Serie 1",
    "data": [
      {
        "x": 2000,
        "y": 1
      },
      {
        "x": 2001,
        "y": 4
      },
      {
        "x": 2002,
        "y": 7
      },
      {
        "x": 2003,
        "y": 10
      },
      {
        "x": 2004,
        "y": 4
      }
    ]
  },
  {
    "id": "Serie 2",
    "data": [
      {
        "x": 2000,
        "y": 7
      },
      {
        "x": 2001,
        "y": 6
      },
      {
        "x": 2002,
        "y": 1
      },
      {
        "x": 2003,
        "y": 9
      },
      {
        "x": 2004,
        "y": 11
      }
    ]
  },
  {
    "id": "Serie 3",
    "data": [
      {
        "x": 2000,
        "y": 3
      },
      {
        "x": 2001,
        "y": 11
      },
      {
        "x": 2002,
        "y": 8
      },
      {
        "x": 2003,
        "y": 1
      },
      {
        "x": 2004,
        "y": 5
      }
    ]
  },
  {
    "id": "Serie 4",
    "data": [
      {
        "x": 2000,
        "y": 10
      },
      {
        "x": 2001,
        "y": 12
      },
      {
        "x": 2002,
        "y": 10
      },
      {
        "x": 2003,
        "y": 7
      },
      {
        "x": 2004,
        "y": 10
      }
    ]
  },
  {
    "id": "Serie 5",
    "data": [
      {
        "x": 2000,
        "y": 5
      },
      {
        "x": 2001,
        "y": 9
      },
      {
        "x": 2002,
        "y": 2
      },
      {
        "x": 2003,
        "y": 3
      },
      {
        "x": 2004,
        "y": 3
      }
    ]
  },
  {
    "id": "Serie 6",
    "data": [
      {
        "x": 2000,
        "y": 4
      },
      {
        "x": 2001,
        "y": 5
      },
      {
        "x": 2002,
        "y": 9
      },
      {
        "x": 2003,
        "y": 8
      },
      {
        "x": 2004,
        "y": 8
      }
    ]
  },
  {
    "id": "Serie 7",
    "data": [
      {
        "x": 2000,
        "y": 11
      },
      {
        "x": 2001,
        "y": 2
      },
      {
        "x": 2002,
        "y": 3
      },
      {
        "x": 2003,
        "y": 11
      },
      {
        "x": 2004,
        "y": 1
      }
    ]
  },
  {
    "id": "Serie 8",
    "data": [
      {
        "x": 2000,
        "y": 8
      },
      {
        "x": 2001,
        "y": 8
      },
      {
        "x": 2002,
        "y": 5
      },
      {
        "x": 2003,
        "y": 5
      },
      {
        "x": 2004,
        "y": 6
      }
    ]
  },
  {
    "id": "Serie 9",
    "data": [
      {
        "x": 2000,
        "y": 9
      },
      {
        "x": 2001,
        "y": 7
      },
      {
        "x": 2002,
        "y": 4
      },
      {
        "x": 2003,
        "y": 12
      },
      {
        "x": 2004,
        "y": 12
      }
    ]
  },
  {
    "id": "Serie 10",
    "data": [
      {
        "x": 2000,
        "y": 12
      },
      {
        "x": 2001,
        "y": 3
      },
      {
        "x": 2002,
        "y": 12
      },
      {
        "x": 2003,
        "y": 2
      },
      {
        "x": 2004,
        "y": 7
      }
    ]
  },
  {
    "id": "Serie 11",
    "data": [
      {
        "x": 2000, // Year
        "y": 2 // Rank
      },
      {
        "x": 2001,
        "y": 1
      },
      {
        "x": 2002,
        "y": null
      },
      {
        "x": 2003,
        "y": null
      },
      {
        "x": 2004,
        "y": 9
      }
    ]
  },
  {
    "id": "Serie 12",
    "data": [
      {
        "x": 2000,
        "y": null
      },
      {
        "x": 2001,
        "y": 10
      },
      {
        "x": 2002,
        "y": 11
      },
      {
        "x": 2003,
        "y": 4
      },
      {
        "x": 2004,
        "y": 2
      }
    ]
  }
];

export function BumpChart() {
    return <ResponsiveBump
        data={data}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={15}
        pointComponent={({ point }) => {
            return (
              <g transform={`translate(${point.x}, ${point.y})`} style={{ pointerEvents: 'none' }}>
                <circle
                  x={point.size * -0.5}
                  y={point.size * -0.5}
                  r={point.size}
                  fill={point.borderColor}
                  stroke={point.borderColor}
                  strokeWidth={point.borderWidth}
                />
                <text textAnchor="middle" y={4} fill="black">
                  {point.data.y}
                </text>
              </g>
            )
        }}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
    />
}
