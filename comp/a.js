import NextLink from "next/link";
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"



export default function A(props) {
  let MyLink = props.icon ? IconButton
    : props.button ? Button
    : Link
  return (<>
    <NextLink href={props.href} >
      <MyLink {...props}>
        {props.children || props.text || props.href}
      </MyLink>

    </NextLink>
  </>)
}