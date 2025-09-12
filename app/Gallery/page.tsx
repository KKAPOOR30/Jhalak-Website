"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, Tag, Folder, ArrowLeft } from "lucide-react"
import { galleryData } from "@/components/galleryData"

type MediaItem = {
  id: string
  type: "photo" | "video"
  src: string
  thumbnail?: string
  title: string
  date?: string
  event: string
}

export default function Home() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)

  const openLightbox = (media: MediaItem) => {
    setSelectedMedia(media)
  }

  const closeLightbox = () => {
    setSelectedMedia(null)
  }

  const openFolder = (folderName: string) => {
    setSelectedFolder(folderName)
  }

  const closeFolder = () => {
    setSelectedFolder(null)
  }

  if (selectedFolder) {
    const folderItems = galleryData[selectedFolder] || []

    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Folder Header */}
          <div className="mb-8">
            <Button variant="outline" onClick={closeFolder} className="flex items-center gap-2 mb-4 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back to Gallery
            </Button>
            <h1 className="text-4xl font-bold text-foreground mb-2">{selectedFolder}</h1>
            <p className="text-muted-foreground">{folderItems.length} items</p>
          </div>

          {/* Folder Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {folderItems.map((item) => (
              <Card
                key={item.id}
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
                onClick={() => openLightbox(item)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-video relative overflow-hidden">
                    {item.type === "video" ? (
                      <Image
                        src={item.thumbnail || item.src}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    ) : (
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    )}
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="bg-white/90 rounded-full p-3">
                          <Play className="w-6 h-6 text-black fill-black" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">Hello{/*new Date(item.date).toLocaleDateString()*/}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Lightbox Modal for folder view */}
          {selectedMedia && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold"
                >
                  ✕
                </button>
                {selectedMedia.type === "photo" ? (
                  <Image
                    src={selectedMedia.src || "/placeholder.svg"}
                    alt={selectedMedia.title}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-[80vh] object-contain"
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <video
                    src={selectedMedia.src}
                    controls
                    className="max-w-full max-h-[80vh]"
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{selectedMedia.title}</h3>
                  <p className="text-white/80 text-sm">
                    {/*new Date(selectedMedia.date).toLocaleDateString()*/}
                    {selectedMedia.event && ` • ${selectedMedia.event}`}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Photo & Video Gallery</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(galleryData).map(([folder, files]) => {
            const coverImage = files[0]
            const mediaCount = files.length

            return (
              <Card
                key={folder}
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
                onClick={() => openFolder(folder)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={coverImage.type === "video" ? coverImage.thumbnail || coverImage.src : coverImage.src}
                      alt={`${groupKey} folder`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {/* Folder overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4">
                        <Folder className="w-8 h-8 text-black" />
                      </div>
                    </div>
                    {/* Item count badge */}
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {items.length} items
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{groupKey}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      {photoCount > 0 && <span>{photoCount} photos</span>}
                      {videoCount > 0 && <span>{videoCount} videos</span>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </main>
  )
}