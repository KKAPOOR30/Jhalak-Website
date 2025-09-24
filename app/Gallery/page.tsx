"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Folder, ArrowLeft } from "lucide-react"
import { galleryData } from "@/components/galleryData"
import Link from "next/link"
import styles from "./galleryStyle.module.css";

function getFileType(fileName: string): "photo" | "video" | "unknown" {
  const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".webp"];
  const videoExtensions = [".mp4", ".mov", ".webm"];

  const ext = fileName.toLowerCase().slice(fileName.lastIndexOf("."));

  if (imageExtensions.includes(ext)) return "photo";
  if (videoExtensions.includes(ext)) return "video";
  return "unknown";
}

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)

  const openLightbox = (media: string) => {
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
      <main>
        <img className={styles.logo} src="jhalak-logo.png"></img>
        <div className={styles.navdecoration}>
            <ul className={styles.navbar}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/AboutUs">About</Link></li>
                <li><Link href="/GetInvolved">Join</Link></li>
                <li><Link href="/Gallery">Gallery</Link></li>
                <li><Link href="/Events">Events</Link></li>
            </ul>
            <div className={styles.navimg}>
                <img src="jhalak-background-top.png"></img>
            </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          {/* Folder Header */}
          <div className="mb-8">
            <Button variant="outline" onClick={closeFolder} className="flex items-center gap-2 mb-4 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back to Gallery
            </Button>
            <h1 className={styles.titles}>{selectedFolder}</h1>
            <p className={styles.countTitle}>{folderItems.length} items</p>
          </div>

          {/* Folder Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {folderItems.map((item: string) => (
              <Card
                key={item}
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
                onClick={() => openLightbox(item)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-video relative overflow-hidden">
                    {getFileType(item) === "video" ? (
                      <Image
                        src="/Logo.jpg"
                        alt={item.slice(item.lastIndexOf("/"))}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    ) : (
                      <Image
                        src={item || "/Logo.jpg"}
                        alt={item.slice(item.lastIndexOf("/"))}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    )}
                    {getFileType(item) === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="bg-white/90 rounded-full p-3">
                          <Play className="w-6 h-6 text-black fill-black" />
                        </div>
                      </div>
                    )}
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
                {getFileType(selectedMedia) === "photo" ? (
                  <Image
                    src={selectedMedia || "/Logo.jpg"}
                    alt={selectedMedia.slice(selectedMedia.lastIndexOf("/"))}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-[80vh] object-contain"
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <video
                    src={selectedMedia || "/Logo.jpg"}
                    controls
                    className="max-w-full max-h-[80vh]"
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    )
  }

  return (
    <main>
        <img className={styles.logo} src="jhalak-logo.png"></img>
        <div className={styles.navdecoration}>
          <ul className={styles.navbar}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/AboutUs">About</Link></li>
              <li><Link href="/GetInvolved">Join</Link></li>
              <li><Link href="/Gallery">Gallery</Link></li>
              <li><Link href="/Events">Events</Link></li>
          </ul>
          <div className={styles.navimg}>
            <img src="jhalak-background-top.png"></img>
          </div>
        </div>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={styles.titles}>Photo & Video Gallery</h1>
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
                      src={coverImage || "/Logo.jpg"}
                      alt={`${folder} folder`}
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
                        {mediaCount} items
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{folder}</h3>
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