import { Card } from '@/components/ui/card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export const usersData = [
  {
    id: 1,
    userName: 'rene.manqueros',
    name: 'Rene Manqueros',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    birthday: 'February 12, 1987',
    coins: 150,
    teamwork: 8,
    innovation: 5,
    leadership: 4,
    collaboration: 4,
  },
  {
    id: 2,
    userName: 'leo.barbosa',
    name: 'Leo Barbosa',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    birthday: 'March 20, 1990',
    coins: 140,
    teamwork: 7,
    innovation: 4,
    leadership: 3,
    collaboration: 3,
  },
  {
    id: 3,
    userName: 'mackenzie.flynn',
    name: 'Mackenzie Flynn',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    birthday: 'June 5, 1992',
    coins: 135,
    teamwork: 6,
    innovation: 4,
    leadership: 4,
    collaboration: 3,
  },
  {
    id: 4,
    userName: 'mario.figueroa',
    name: 'Mario Figueroa',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    birthday: 'April 15, 1985',
    coins: 125,
    teamwork: 7,
    innovation: 3,
    leadership: 2,
    collaboration: 2,
  },
  {
    id: 5,
    userName: 'cynthia.tsai',
    name: 'Cynthia Tsai',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    birthday: 'November 25, 1988',
    coins: 120,
    teamwork: 6,
    innovation: 3,
    leadership: 2,
    collaboration: 2,
  },
  {
    id: 6,
    userName: 'giuliana.hejtmanek',
    name: 'Giuliana Hejtmanek',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    birthday: 'May 14, 1993',
    coins: 115,
    teamwork: 5,
    innovation: 3,
    leadership: 2,
    collaboration: 2,
  },
  {
    id: 7,
    userName: 'shashank.shastri',
    name: 'Shashank Shastri',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    birthday: 'December 10, 1990',
    coins: 110,
    teamwork: 5,
    innovation: 3,
    leadership: 2,
    collaboration: 1,
  },
  {
    id: 8,
    userName: 'stacey.cooper',
    name: 'Stacey Cooper',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    birthday: 'January 30, 1991',
    coins: 105,
    teamwork: 5,
    innovation: 2,
    leadership: 2,
    collaboration: 2,
  },
  {
    id: 9,
    userName: 'alex.mora',
    name: 'Alex Mora',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
    birthday: 'October 2, 1994',
    coins: 100,
    teamwork: 4,
    innovation: 3,
    leadership: 2,
    collaboration: 2,
  },
  {
    id: 10,
    userName: 'alexander.carrizo',
    name: 'Alexander Carrizo',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    birthday: 'August 19, 1992',
    coins: 95,
    teamwork: 4,
    innovation: 3,
    leadership: 2,
    collaboration: 2,
  },
  {
    id: 11,
    userName: 'german.rodriguez',
    name: 'German Rodriguez',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    birthday: 'July 23, 1989',
    coins: 90,
    teamwork: 4,
    innovation: 3,
    leadership: 2,
    collaboration: 2,
  },
  {
    id: 12,
    userName: 'guillermo.jureidin',
    name: 'Guillermo Jureidin',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    birthday: 'September 10, 1995',
    coins: 85,
    teamwork: 4,
    innovation: 3,
    leadership: 2,
    collaboration: 2,
  },
]

export default function Chart() {
  const colors = {
    teamwork: 'hsl(0 91% 71%)',
    innovation: 'hsl(146 70% 75%)',
    leadership: 'hsl(199 89% 75%)',
    collaboration: 'hsl(271 81% 85%)',
  }

  return (
    <Card className="w-full p-10">
      <div className="space-y-10">
        <div className="flex items-center gap-2 w-full">
          <h2 className="text-lg font-semibold text-center">
            Most Recognition Received For The Entire Company
          </h2>
          <button className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">About recognition metrics</span>ⓘ
          </button>
        </div>

        <div className="aspect-[2/1] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={usersData.reverse()}
              layout="vertical"
              margin={{ top: 0, right: 30, left: 100, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 21]} />
              <YAxis
                type="category"
                dataKey="name"
                width={100}
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const total = payload.reduce(
                      (sum, entry) =>
                        sum + (typeof entry.value === 'number' ? entry.value : 0),
                      0
                    )
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="font-medium">{payload[0].payload.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Total: {total} recognitions
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Legend />
              {Object.entries(colors).map(([key, color]) => (
                <Bar key={key} dataKey={key} stackId="a" fill={color} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  )
}