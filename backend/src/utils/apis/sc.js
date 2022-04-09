//require("dotenv").config();
const axios = require("axios");

class SoundCloud {
  constructor(clientId) {
    this.clientId = clientId;
  }

  formatArtistData(artists) {
    const artistsData = Array.isArray(artists) ? artists : [artists];
    const data = artistsData.map((artist) => {
      return {
        id: artist.id,
        name: artist.username,
        avatar: artist.avatar_url,
        description: artist.description,
      };
    });

    return Array.isArray(artists) ? data : data[0];
  }

  formatAlbumData(albums) {
    const albumData = Array.isArray(albums) ? albums : [albums];
    const data = albumData.map((album) => {
      return {
        id: album.id,
        cover: album.artwork_url,
        description: album.description,
        duration: album.duration,
        genres: [album.genre],
        release_date: album.release_date,
        artist_id: album.user_id,
        title: album.title,
      };
    });

    return Array.isArray(albums) ? data : data[0];
  }

  formatPlaylistData(playlists) {
    const playlistData = Array.isArray(playlists) ? playlists : [playlists];
    const data = playlistData.map((playlist) => {
      return {
        id: playlist.id,
        cover: playlist.artwork_url,
        description: playlist.description,
        duration: playlist.duration,
        genres: [playlist.genre],
        user_id: playlist.user_id,
        title: playlist.title,
      };
    });

    return Array.isArray(playlists) ? data : data[0];
  }

  formatTrackData(tracks) {
    const trackData = Array.isArray(tracks) ? tracks : [tracks];
    const data = trackData.map((track) => {
      return {
        id: track.id,
        cover: track.artwork_url,
        description: track.description,
        duration: track.duration,
        genres: [track.genre],
        artist_id: track.user_id,
        album_id: null,
        title: track.title,
        release_date: track.release_date,
      };
    });

    return Array.isArray(tracks) ? data : data[0];
  }

  async get(type, params) {
    params = {
      limit: 50,
      offset: 0,
      client_id: this.clientId,
      ...params,
    };

    return new Promise(async (resolve, reject) => {
      let urlParameters = Object.entries(params)
        .map((e) => e.join("="))
        .join("&");

      const url = `https://api-v2.soundcloud.com${type}?${urlParameters}`;

      try {
        const res = await axios({
          url,
          headers: {
            "x-requested-with": "https://soundcloud.com",
          },
        });

        resolve(res.data);
      } catch (err) {
        reject(err);
      }
    });
  }

  async search(item, params) {
    const res = await this.get(`/search/${item}`, params);
    return res;
  }

  async searchArtists(q, options) {
    const res = await this.search("users", { q, ...options });
    const data = this.formatArtistData(res.collection);

    return data;
  }

  async searchAlbums(q, options) {
    const res = await this.search("albums", { q, ...options });
    const data = this.formatAlbumData(res.collection);

    return data;
  }

  async searchPlaylists(q, options) {
    const res = await this.search("playlists", { q, ...options });
    const data = this.formatPlaylistData(res.collection);

    return data;
  }

  async searchTracks(q, options) {
    const res = await this.search("tracks", { q, ...options });
    const data = this.formatTrackData(res.collection);

    return data;
  }

  async getArtist(id) {
    const res = await this.get(`/users/${id}`);
    const data = this.formatArtistData(res);

    return data;
  }

  async getArtistAlbums(id) {
    const res = await this.get(`/users/${id}/albums`);
    const data = this.formatAlbumData(res.collection);
    console.log(data);
    return data;
  }

  async getArtistPlaylists(id) {
    const res = await this.get(`/users/${id}/playlists_without_albums`);
    const data = this.formatPlaylistData(res.collection);

    return data;
  }

  async getArtistTracks(id) {
    const res = await this.get(`/users/${id}/tracks`);
    const data = this.formatTrackData(res.collection);

    return data;
  }

  async getAlbum(id) {
    const res = await this.get(`/playlists/${id}`);
    return res;
  }

  async getAlbumTracks(id) {
    const res = await this.getAlbum(id);
    return res.tracks;
  }

  async getPlaylist(id) {
    return this.getAlbum(id);
  }

  async getPlaylistTracks(id) {
    return this.getAlbumTracks(id);
  }

  async getTrack(id) {
    const res = await this.get(`/tracks/${id}`);
    return res;
  }

  async getTrackStreamUrl(id) {
    const track = await this.getTrack(id);
    const streamUrl =
      track.media?.transcodings[1]?.url + "?client_id=" + this.clientId;

    const res = await axios({
      url: streamUrl,
      headers: {
        "x-requested-with": "https://soundcloud.com",
      },
    });

    const mp3File = res.data.url;
    return { url: mp3File };
  }
}

const instance = new SoundCloud(process.env.SC_CLIENT_ID);
Object.freeze(instance);

module.exports = instance;
