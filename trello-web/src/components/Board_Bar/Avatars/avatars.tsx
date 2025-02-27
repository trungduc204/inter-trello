import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const Avatars = () => {
  return (
    <AvatarGroup
      total={7}
      sx={{
        "& .MuiAvatar-root": {
          width: 28, 
          height: 28, // Cỡ chữ bên trong nếu là text avatar
        } }}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://i.pinimg.com/736x/a3/97/08/a39708a2a9f24f9399fd36de158b719b.jpg"
      />
      <Avatar
        alt="Travis Howard"
        src="https://i.pinimg.com/736x/3d/d3/e6/3dd3e665d08144852c8f4be98aea6a11.jpg"
      />
      <Avatar
        alt="Agnes Walker"
        src="https://i.pinimg.com/736x/95/1e/ab/951eab3d94773388f2eab6eea1c04463.jpg"
      />
      <Avatar
        alt="Trevor Henderson"
        src="https://i.pinimg.com/736x/b9/3a/d3/b93ad36c0773999e4be8e5de0a7af144.jpg"
      />
    </AvatarGroup>
  );
};
export default Avatars;
