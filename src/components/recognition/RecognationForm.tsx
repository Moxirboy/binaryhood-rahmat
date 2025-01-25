import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Coins, X, Tag } from 'lucide-react'
import { myData, stickers, usersData } from '@/helper/db'

const recommendedCoins = ['+10', '+20', '+25', '+30', '+50', '+250']

export default function RecognitionForm({
  setShowRecognitionForm,
  updateBlogData,
  setMyData,
}: {
  setShowRecognitionForm: React.Dispatch<React.SetStateAction<boolean>>
  updateBlogData: (newPost: any) => void
  setMyData: React.Dispatch<React.SetStateAction<typeof myData>>
}) {
  const [isOpen, setIsOpen] = useState(true)
  const [recognitionText, setRecognitionText] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<string[]>([])
  const [filteredCoins, setFilteredCoins] = useState<string[]>([])
  const [mentioning, setMentioning] = useState(false)
  const [recommendingCoins, setRecommendingCoins] = useState(false)
  const [showStickerModal, setShowStickerModal] = useState(false)
  const [selectedSticker, setSelectedSticker] = useState<any>(null)
  const [showInsufficientCoinsModal, setShowInsufficientCoinsModal] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
    setShowRecognitionForm(false)
  }

  const handleSubmit = () => {
    const recognitionMatch = recognitionText.match(/@(\w+)/)
    const pointsMatch = recognitionText.match(/\+(\d+)/)
    const recipient = recognitionMatch ? recognitionMatch[1] : null
    const recognitionPoints = pointsMatch ? parseInt(pointsMatch[1]) : 0

    if (!recipient || recognitionPoints <= 0) {
      alert('Please include a valid recipient (@username) and points (+10, +50, etc.)')
      return
    }

    const stickerCost = selectedSticker ? selectedSticker.cost : 0
    const totalCost = recognitionPoints + stickerCost

    if (myData.coins < totalCost) {
      setShowInsufficientCoinsModal(true)
      return
    }

    setMyData((prevData) => ({
      ...prevData,
      coins: prevData.coins - totalCost,
    }))

    const newPost = {
      team: true,
      id: Date.now(),
      mine: true,
      points: recognitionPoints,
      author: {
        name: myData.name,
        avatarImage: myData.avatar,
        avatarFallback: myData.userName.charAt(0).toUpperCase(),
      },
      message: recognitionText,
      recognitionPoints,
      sticker: selectedSticker,
      comments: [],
    }

    updateBlogData(newPost)
    setIsOpen(false)
    setShowRecognitionForm(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setRecognitionText(value)

    const mentionMatch = value.match(/@(\w*)$/)
    if (mentionMatch && mentionMatch[1]) {
      setMentioning(true)
      setRecommendingCoins(false)
      const filter = usersData.filter((user) =>
        user.userName.includes(mentionMatch[1])
      )
      setFilteredUsers(filter.map((user) => user.userName))
    } else {
      setMentioning(false)
      setFilteredUsers([])
    }
    

    const coinMatch = value.match(/\+(\d*)$/)
    if (coinMatch && coinMatch[1] !== undefined) {
      setRecommendingCoins(true)
      setMentioning(false)
      const filter = recommendedCoins.filter((coin) =>
        coin.includes(`+${coinMatch[1]}`)
      )
      setFilteredCoins(filter)
    } else {
      setRecommendingCoins(false)
      setFilteredCoins([])
    }
  }

  const handleUserSelect = (userName: string) => {
    const currentText = recognitionText
    const mentionMatch = currentText.match(/@(\w*)$/)

    if (mentionMatch) {
      const updatedText =
        currentText.slice(0, mentionMatch.index) + '@' + userName + ' '
      setRecognitionText(updatedText)
      setMentioning(false)
      setFilteredUsers([])
    }
  }

  const handleCoinSelect = (coin: string) => {
    const currentText = recognitionText
    const coinMatch = currentText.match(/\+(\d*)$/)

    if (coinMatch) {
      const updatedText = currentText.slice(0, coinMatch.index) + coin + ' '
      setRecognitionText(updatedText)
      setRecommendingCoins(false)
      setFilteredCoins([])
    }
  }

  const handleStickerSelect = (sticker: any) => {
    const updatedText = `${recognitionText} [Sticker: ${sticker.name}]`
    setRecognitionText(updatedText)
    setSelectedSticker(sticker)
    setShowStickerModal(false)
  }

  const coinsData = localStorage.getItem('myData')
  const parsedCoins = coinsData ? JSON.parse(coinsData).coins : 0

  return (
    <>
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-xl p-0 gap-0">
        <DialogHeader className="p-4 flex-row justify-between items-center border-b">
          <DialogTitle>Give recognition</DialogTitle>

          <div className="flex items-center gap-2">
            <Coins className="h-5 w-5 text-emerald-600" />
            <span className="text-emerald-600 font-medium">{parsedCoins} points</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 ml-2"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogHeader>

        <Tabs defaultValue="recipient" className="w-full">
          <TabsList className="w-full justify-start rounded-none border-b h-auto p-0">
            <TabsTrigger
              value="recipient"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
            >
              @ Recipient
            </TabsTrigger>
            <TabsTrigger
              value="amount"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
            >
              + Amount
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="relative p-4">
          <Textarea
            value={recognitionText}
            onChange={handleChange}
            placeholder="@alejandro +10 for helping me launch a marketing campaign so that we can generate new business #teamwork"
            className="min-h-[120px] border-none bg-transparent p-0 focus-visible:ring-0 resize-none"
          />

          {(mentioning || recommendingCoins) && (
            <div className="absolute top-[calc(100%+5px)] left-0 w-full bg-background shadow-lg z-50 max-h-[200px] overflow-auto">
              <ul className="p-2 flex items-center gap-3">
                {mentioning &&
                  filteredUsers.map((user, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleUserSelect(user)}
                      className="p-2 hover:bg-bgLightBox dark:hover:bg-bgDarkBox rounded-md cursor-pointer"
                    >
                      @{user}
                    </li>
                  ))}
                {recommendingCoins &&
                  filteredCoins.map((coin, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleCoinSelect(coin)}
                      className="p-2 hover:bg-bgLightBox dark:hover:bg-bgDarkBox rounded-md cursor-pointer"
                    >
                      {coin}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between p-4 border-t">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setShowStickerModal(true)}
          >
            <Tag className="h-4 w-4" />
            <span className="sr-only">Add Sticker</span>
          </Button>

          <Dialog open={showStickerModal} onOpenChange={setShowStickerModal}>
            <DialogContent className="max-w-xl p-0 gap-0">
              <DialogHeader className="p-4 flex-row justify-between items-center border-b">
                <DialogTitle>Select a Sticker</DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setShowStickerModal(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogHeader>

              <div className="flex justify-around p-4">
                {stickers.map((sticker) => (
                  <div key={sticker.id} className="flex flex-col items-center">
                    <span>{sticker.image}</span>
                    <span>{sticker.name}</span>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleStickerSelect(sticker)}
                    >
                      Use for {sticker.cost} Coins
                    </Button>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </DialogContent>
    </Dialog>

    <Dialog open={showInsufficientCoinsModal} onOpenChange={setShowInsufficientCoinsModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Insufficient Coins</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <p>You don't have enough coins to give this recognition.</p>
          <Button onClick={() => setShowInsufficientCoinsModal(false)}>Close</Button>
        </div>
      </DialogContent>
    </Dialog></>
  )
}
